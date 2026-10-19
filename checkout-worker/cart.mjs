// Prices and availability must come from the server catalog, never the browser.
export function validateCart(items, stock) {
  if (!Array.isArray(items) || items.length < 1 || items.length > 30) throw new Error('Invalid cart');
  const services = {
    installation: {name:'CarPlay / Android Auto Installation', amount:20000},
    'dashcam-installation': {name:'Dashcam Installation', amount:15000}
  };
  const rows = [];
  const used = new Map();
  for (const item of items) {
    if (!item || typeof item.key !== 'string' || !Number.isSafeInteger(item.qty) || item.qty < 1 || item.qty > 10) throw new Error('Invalid quantity');
    if (services[item.key] && Object.hasOwn(services,item.key)) {
      const quantity = (used.get(item.key) || 0) + item.qty;
      if (quantity > 10) throw new Error('Too many services');
      used.set(item.key,quantity);
      rows.push({key:item.key, ...services[item.key], quantity:item.qty, inventory:[]});
      continue;
    }
    if (!item.key.startsWith('p:')) throw new Error('Unknown item');
    let requested;
    try { requested = JSON.parse(item.key.slice(2)); } catch { throw new Error('Unknown item'); }
    if (!Array.isArray(requested)) throw new Error('Unknown item');
    const row = stock.find(x => x.slice(0,6).every((v,i)=>v===requested[i]) && x[7]===requested[7]);
    if (!row || row[8] === 'sold') throw new Error('Item unavailable');
    if (requested[6] !== row[6]) throw new Error('Price changed; refresh your cart');
    const codes = row[7].split(' / ').filter(code => !(row[9] || []).includes(code));
    const remaining = codes.filter(code => !used.has(code));
    if (item.qty > remaining.length) throw new Error('Not enough stock');
    const inventory = remaining.slice(0,item.qty);
    inventory.forEach(code => used.set(code,1));
    const amount = Math.round(row[6]*100);
    if (!Number.isSafeInteger(amount) || amount <= 0) throw new Error('Invalid catalog price');
    rows.push({key:item.key,name:row[0]+' '+row[1]+' '+row[2]+'–'+row[3]+' ('+inventory.join(' / ')+')',amount,quantity:item.qty,inventory});
  }
  return rows;
}
