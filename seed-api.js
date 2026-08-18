const http = require('http');

const conditions = [
  { code: 'customer_type', name: 'Customer Type', type: 'string', source: 'customer', description: 'End user, Outlet, or Keyshop' },
  { code: 'tier', name: 'Customer Tier', type: 'string', source: 'customer', description: 'Customer loyalty tier (e.g. Platinum, VIP)' },
  { code: 'total_purchase_amount', name: 'Total Purchase Amount', type: 'number', source: 'loyalty_account', description: 'Total lifetime spend of the customer' },
  { code: 'babyCount', name: 'Total Children (Baby Count)', type: 'number', source: 'database_query', description: 'Number of children added to profile' },
];

async function run() {
  for (const c of conditions) {
    const data = JSON.stringify(c);
    const req = http.request('http://localhost:3000/v1/admin/conditions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => console.log(`Created ${c.code}: ${res.statusCode} - ${body}`));
    });
    req.on('error', e => console.error(e));
    req.write(data);
    req.end();
    
    // wait a bit
    await new Promise(r => setTimeout(r, 500));
  }
}
run();
