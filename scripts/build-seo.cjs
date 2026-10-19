const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=process.argv[2]||'.',out=process.argv[3]||root;
let source=fs.readFileSync(path.join(root,'index.html'),'utf8');
source=source.replace(/<!-- SEO-DIRECTORY-START -->[\s\S]*?<!-- SEO-DIRECTORY-END -->/,'').replace(/<meta name="description"[^>]*>|<link rel="canonical"[^>]*>/g,'');
const origin='https://isc-carplay.ca';
const stock=vm.runInNewContext(source.match(/const stock\s*=\s*(\[[\s\S]*?\n\]);/)[1]);
const images=vm.runInNewContext('('+source.match(/const productImages\s*=\s*({[\s\S]*?\n});/)[1]+')');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug=x=>('/products/'+[x[7].split(' / ')[0],x[0],x[1],x[2],x[3]].join('-').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'/');
const items=stock.filter(x=>images[x[7]]);
assert.equal(new Set(items.map(slug)).size,items.length);
const files=[];const write=(p,c)=>{fs.mkdirSync(path.dirname(path.join(out,p)),{recursive:true});fs.writeFileSync(path.join(out,p),c);files.push(p);};
// Keep index.html as the authoritative inventory and original application.
const css=source.match(/<style>([\s\S]*?)<\/style>/)[1];
write('assets/catalog.css',css);
write('checkout-catalog.json',JSON.stringify(stock));
let js=source.match(/<script>([\s\S]*?)<\/script>/)[1];
const productUrlCode=`function productUrl(x){return '/products/'+[x[7].split(' / ')[0],x[0],x[1],x[2],x[3]].join('-').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'/';}`;
js=productUrlCode+'\n'+js;
js=js.replace(" if(!location.hash.startsWith(prefix)){"," if(!location.hash.startsWith(prefix) && !location.pathname.startsWith('/products/')){");
js=js.replace(' const item=stock.find(x=>',' const item=location.pathname.startsWith(\'/products/\')?stock.find(x=>productUrl(x)===location.pathname):stock.find(x=>');
js=js.replace('if(location.hash.startsWith("#product/"))history.replaceState(null,"","#"+page);','if(location.pathname!=="/"||location.hash.startsWith("#product/"))history.replaceState(null,"","/#"+page);');
js+='\nupdateCart();\nif(location.pathname===\'/services/\')showPage(\'services\');if(location.pathname===\'/about/\')showPage(\'about\');';
new vm.Script(js);write('assets/catalog.js',js);
const funcs=vm.runInNewContext('(function(){'+source.match(/function productGallery\(code,item\)\{[\s\S]*?\n\}/)[0]+source.match(/function card\(x,detail=false\)\{[\s\S]*?\n\}/)[0]+';return {card,productGallery};})()', {stock,productImages:images});
const blank='<section id="productPage" aria-label="Product details"><a class="back-products" href="#brands">← Back to products</a><h1 id="productTitle" tabindex="-1"></h1><div id="productDetails" class="product-detail-layout"></div></section>';
assert(source.includes(blank));
let shell=source.replace(/<style>[\s\S]*?<\/style>/,'<link rel="stylesheet" href="/assets/catalog.css">').replace(/<script>[\s\S]*?<\/script>/,'<script src="/assets/catalog.js"></script>').replace('<head>','<head><base href="/">');
const meta=(html,title,description,url)=>html.replace(/<title>.*?<\/title>/,'<title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'"><link rel="canonical" href="'+url+'">');
const links=items.map(x=>'<li><a href="'+slug(x)+'">'+esc(x[0]+' '+x[1]+' '+x[2]+'–'+x[3]+' — '+x[7])+'</a></li>').join('');
for(const x of items){
 const title=x[0]+' '+x[1]+' '+x[2]+'–'+x[3];
 const description=title+' CarPlay screen: '+x[4]+', '+x[5]+'. '+(x[8]==='sold'?'Sold.':'$'+Number(x[6]).toFixed(2)+' CAD.')+' ISC CarPlay, Burlington / Hamilton.';
 let html=meta(shell,title+' | ISC CarPlay',description,origin+slug(x));
 html=html.replace('<section id="brandsPage">','<section id="brandsPage" style="display:none">').replace(blank,'<section id="productPage" style="display:block" aria-label="Product details"><a class="back-products" href="/#brands">← Back to products</a><h1 id="productTitle" tabindex="-1">'+esc(title)+'</h1><div id="productDetails" class="product-detail-layout">'+funcs.productGallery(x[7],x)+funcs.card(x,true)+'</div></section>');
 write(slug(x).slice(1)+'index.html',html);
}
for(const [page,title,desc] of [['services','CarPlay & Dashcam Installation','CarPlay installation $200 CAD and dashcam installation $150 CAD in the Burlington / Hamilton area.'],['about','About ISC CarPlay','CarPlay screens, Android Auto upgrades, dashcams and professional installation in the Burlington / Hamilton area.']]){
 let html=meta(shell,title+' | ISC CarPlay',desc,origin+'/'+page+'/').replace('<section id="brandsPage">','<section id="brandsPage" style="display:none">').replace('<section id="'+page+'Page">','<section id="'+page+'Page" style="display:block">');write(page+'/index.html',html);
}
const footer='<footer style="max-width:1250px;margin:auto;padding:24px"><a href="/services/">Installation services</a> · <a href="/about/">About ISC CarPlay</a><details><summary>Browse all product pages</summary><ul>'+links+'</ul></details></footer>';
source=source.replace(/<!-- SEO-DIRECTORY-START -->[\s\S]*?<!-- SEO-DIRECTORY-END -->/,'');
source=source.replace('</body>','<!-- SEO-DIRECTORY-START -->'+footer+'<!-- SEO-DIRECTORY-END --></body>');
source=source.replace(/<meta name="description"[^>]*>|<link rel="canonical"[^>]*>/g,'');
source=meta(source,'ISC CarPlay | CarPlay & Dashcam Installation in Burlington & Hamilton','Shop vehicle-specific CarPlay screens and Android Auto upgrades. Professional CarPlay and dashcam installation in Burlington and Hamilton.',origin+'/');
write('index.html',source);
const urls=['/','/services/','/about/',...items.map(slug)];write('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+origin+u+'</loc></url>').join('\n')+'</urlset>');
write('robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+origin+'/sitemap.xml\n');
fs.writeFileSync(path.join(out,'manifest.json'),JSON.stringify(files));console.log(JSON.stringify({products:items.length,files:files.length,urls:urls.length}));

