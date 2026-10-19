import {validateCart} from './cart.mjs';
import testCatalog from './test-catalog.json' with {type:'json'};
const json=(data,status=200)=>Response.json(data,{status});
export function parameters(rows,taxId,origin,id){
 const p=new URLSearchParams({mode:'payment',success_url:origin+'/?checkout=success&session_id={CHECKOUT_SESSION_ID}',cancel_url:origin+'/?checkout=cancelled',client_reference_id:id,'payment_method_types[0]':'card','automatic_tax[enabled]':'false','adaptive_pricing[enabled]':'false','phone_number_collection[enabled]':'true','metadata[fulfillment]':'pickup','custom_text[submit][message]':'Pickup only: 460 Dundas St E, Waterdown, ON L8B 2A5. Call 905-638-2020 to arrange pickup. No shipping.'});
 rows.forEach((r,i)=>{
  const k='line_items['+i+']';
  p.set(k+'[price_data][currency]','cad');p.set(k+'[price_data][unit_amount]',String(r.amount));
  p.set(k+'[price_data][product_data][name]',r.name);p.set(k+'[quantity]',String(r.quantity));p.set(k+'[tax_rates][0]',taxId);
 });
 p.set('expires_at',String(Math.floor(Date.now()/1000)+1900));
 p.set('metadata[inventory_codes]',rows.flatMap(r=>r.inventory).join(','));
 return p.toString();
}
async function stripe(env,path,method='GET',body,idem){
 const headers={Authorization:'Bearer '+env.STRIPE_SECRET_KEY,'Stripe-Version':'2025-06-30.basil'};
 if(body)headers['Content-Type']='application/x-www-form-urlencoded';if(idem)headers['Idempotency-Key']=idem;
 const res=await fetch('https://api.stripe.com/v1/'+path,{method,headers,body,signal:AbortSignal.timeout(12000)});
 const data=await res.json();if(!res.ok)throw new Error('Payment provider unavailable');return data;
}
export default {async fetch(request,env){
 const origin=request.headers.get('Origin'),site=env.SITE_ORIGIN;
 const headers={'Access-Control-Allow-Origin':site,'Access-Control-Allow-Methods':'POST, GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Cache-Control':'no-store','Vary':'Origin'};
 if(request.method==='OPTIONS')return new Response(null,{status:origin===site?204:403,headers});
 if(origin!==site)return json({error:'Origin not allowed'},403);
 const url=new URL(request.url);
 if(!['/checkout','/status'].includes(url.pathname))return json({error:'Not found'},404);
 if(env.PAYMENTS_ENABLED!=='true'||!env.STRIPE_SECRET_KEY)return new Response(JSON.stringify({error:'Online payment is not available yet. Please request a payment link on WhatsApp.'}),{status:503,headers:{...headers,'Content-Type':'application/json'}});
 const keyPattern=env.TEST_MODE==='true'?/^(sk|rk)_test_/:/^(sk|rk)_live_/;
 if(!keyPattern.test(env.STRIPE_SECRET_KEY))return new Response(JSON.stringify({error:'Payment configuration unavailable.'}),{status:503,headers:{...headers,'Content-Type':'application/json'}});
 try{
  if(env.CHECKOUT_LIMITER){const {success}=await env.CHECKOUT_LIMITER.limit({key:request.headers.get('CF-Connecting-IP')||'anonymous'});if(!success)return new Response(JSON.stringify({error:'Too many requests. Please wait a minute.'}),{status:429,headers:{...headers,'Content-Type':'application/json','Retry-After':'60'}});}
  const id=env.ORDERS.idFromName('pickup-inventory-v1');
  const result=await env.ORDERS.get(id).fetch(request);
  return new Response(result.body,{status:result.status,headers:{...headers,'Content-Type':'application/json'}});
 }catch{return new Response(JSON.stringify({error:'Unable to start payment. Please try again or contact 905-638-2020.'}),{status:503,headers:{...headers,'Content-Type':'application/json'}});}
}};
export class PickupOrders {
 constructor(ctx,env){this.ctx=ctx;this.env=env;this.queue=Promise.resolve();}
 async fetch(request){const next=this.queue.then(()=>this.handle(request));this.queue=next.catch(()=>{});return next;}
 async session(record,id){
  const session=record.session?await stripe(this.env,'checkout/sessions/'+record.session):await stripe(this.env,'checkout/sessions','POST',record.params,id);
  record.session=session.id;record.url=session.url;record.status=session.status;record.paid=session.payment_status==='paid';
  await this.ctx.storage.put('order:'+id,record);
  return session;
 }
 async handle(request){
  const url=new URL(request.url);
  if(url.pathname==='/status'&&request.method==='GET'){
   const id=url.searchParams.get('session_id');if(!/^cs_(test|live)_[A-Za-z0-9]+$/.test(id||''))return json({error:'Invalid session'},400);
   const records=await this.ctx.storage.list({prefix:'order:'});
   for(const [key,record] of records)if(record.session===id){const s=await this.session(record,key.slice(6));return json({paid:s.payment_status==='paid',status:s.status,total:s.amount_total,currency:s.currency});}
   return json({error:'Unknown session'},404);
  }
  if(url.pathname!=='/checkout'||request.method!=='POST')return json({error:'Not allowed'},405);
  const raw=await request.text();if(raw.length>30000)return json({error:'Cart too large'},413);
  let body;try{body=JSON.parse(raw);}catch{return json({error:'Invalid cart'},400);}
  if(!body||!/^\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(body.requestId||''))return json({error:'Invalid request'},400);
  const previous=await this.ctx.storage.get('order:'+body.requestId);
  if(previous){if(previous.cart!==JSON.stringify(body.items))return json({error:'Cart changed; start again'},409);const s=await this.session(previous,body.requestId);return s.status==='open'?json({url:s.url}):json({error:'Checkout already completed or expired. Start again.'},409);}
  let stock;
  if(this.env.TEST_MODE==='true'){stock=testCatalog;}else{
  const response=await fetch(this.env.SITE_ORIGIN+'/checkout-catalog.json',{cache:'no-store',signal:AbortSignal.timeout(6000)});
  if(!response.ok)throw new Error('Catalog unavailable');stock=await response.json();}
  try{validateCart(body.items,stock);}catch(e){return json({error:e.message},409);}
  const wanted=new Set(body.items.flatMap(item=>item.key.startsWith('p:')?JSON.parse(item.key.slice(2))[7].split(' / '):[]));
  // Never reuse physical inventory across vehicle fitments or concurrent checkouts.
  const records=await this.ctx.storage.list({prefix:'order:'});const unavailable=new Set();
  for(const [key,record] of records){
   if(record.status==='expired'||!record.codes.some(c=>wanted.has(c)))continue;
   const expires=Number(new URLSearchParams(record.params).get('expires_at'));
   if(!record.paid&&(!expires||Date.now()/1000>=expires))await this.session(record,key.slice(6));
   if(record.status!=='expired')record.codes.forEach(c=>unavailable.add(c));
  }
  const available=stock.map(r=>{const x=[...r];x[9]=[...new Set([...(r[9]||[]),...r[7].split(' / ').filter(c=>unavailable.has(c))])];return x;});
  let rows;try{rows=validateCart(body.items,available);}catch(e){return json({error:e.message},409);}
  let taxId=await this.ctx.storage.get('tax-rate');
  if(!taxId){const tax=await stripe(this.env,'tax_rates','POST',new URLSearchParams({display_name:'HST',description:'Ontario HST 13%',percentage:'13',inclusive:'false',country:'CA',state:'ON',jurisdiction:'Ontario'}).toString(),'pickup-hst-13-v1');taxId=tax.id;await this.ctx.storage.put('tax-rate',taxId);}
  const record={params:parameters(rows,taxId,this.env.SITE_ORIGIN,body.requestId),codes:rows.flatMap(r=>r.inventory),cart:JSON.stringify(body.items),status:'pending',paid:false};
  // Persist before requesting Stripe: ambiguous failures keep stock locked until recovered.
  await this.ctx.storage.put('order:'+body.requestId,record);
  const s=await this.session(record,body.requestId);return json({url:s.url});
 }
}
