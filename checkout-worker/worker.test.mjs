import {test} from 'node:test';
import assert from 'node:assert/strict';
import worker,{PickupOrders} from './worker.mjs';
import catalog from './test-catalog.json' with {type:'json'};
const origin='https://isc-carplay.ca';
test('concurrent physical stock, retry, and expired reservations',async()=>{
 const saved=new Map(),sessions=new Map();let count=0;
 const storage={get:async k=>structuredClone(saved.get(k)),put:async(k,v)=>saved.set(k,structuredClone(v)),list:async()=>new Map([...saved].filter(([k])=>k.startsWith('order:')).map(([k,v])=>[k,structuredClone(v)]))};
 const original=globalThis.fetch;
 globalThis.fetch=async(url,options={})=>{
  if(url.endsWith('/tax_rates'))return Response.json({id:'txr_test'});
  if(options.method==='POST'){
   const p=new URLSearchParams(options.body);assert.equal(p.get('automatic_tax[enabled]'),'false');assert.equal(p.get('line_items[0][tax_rates][0]'),'txr_test');
   const id='cs_test_'+(++count);const s={id,url:'https://checkout.stripe.com/'+id,status:'open',payment_status:'unpaid'};sessions.set(id,s);return Response.json(s);
  }
  return Response.json(sessions.get(url.split('/').pop()));
 };
 try{
  const obj=new PickupOrders({storage},{TEST_MODE:'true',SITE_ORIGIN:origin,STRIPE_SECRET_KEY:'sk_test_fake'});
  const row=catalog.find(r=>r[7]==='CR075');const items=[{key:'p:'+JSON.stringify(row),qty:1}];
  const request=(id)=>new Request(origin+'/checkout',{method:'POST',body:JSON.stringify({requestId:id,items})});
  const a='00000000-0000-4000-8000-000000000001',b='00000000-0000-4000-8000-000000000002';
  const results=await Promise.all([obj.fetch(request(a)),obj.fetch(request(b))]);assert.deepEqual(results.map(r=>r.status),[200,409]);assert.equal(count,1);
  assert.equal((await obj.fetch(request(a))).status,200);assert.equal(count,1);
  const record=saved.get('order:'+a);const p=new URLSearchParams(record.params);p.set('expires_at','1');record.params=p.toString();sessions.get(record.session).status='expired';
  assert.equal((await obj.fetch(request(b))).status,200);assert.equal(count,2);
  sessions.get('cs_test_2').payment_status='paid';sessions.get('cs_test_2').status='complete';
  const status=await obj.fetch(new Request(origin+'/status?session_id=cs_test_2'));assert.equal((await status.json()).paid,true);
  assert.equal((await obj.fetch(request('00000000-0000-4000-8000-000000000003'))).status,409);
 }finally{globalThis.fetch=original;}
});
test('origin, key modes and throttling fail safely',async()=>{
 const req=(o)=>new Request(origin+'/checkout',{method:'POST',headers:{Origin:o}});
 const env={SITE_ORIGIN:origin,PAYMENTS_ENABLED:'true',STRIPE_SECRET_KEY:'rk_test_fake'};
 assert.equal((await worker.fetch(req('https://other.example'),env)).status,403);
 assert.equal((await worker.fetch(req(origin),env)).status,503);
 env.STRIPE_SECRET_KEY='rk_live_fake';env.CHECKOUT_LIMITER={limit:async()=>({success:false})};
 assert.equal((await worker.fetch(req(origin),env)).status,429);
});
