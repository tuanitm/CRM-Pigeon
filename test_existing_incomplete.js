const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function test() {
  const customer = await prisma.customer.create({
    data: {
      phone: '+84999111222',
      fullName: 'Incomplete Customer',
      registrationSource: 'ZaloMiniApp'
    }
  });
  console.log('Created customer:', customer.id);
  
  const http = require('http');
  const data = JSON.stringify({
    phone: "0999111222",
    source: "Portal"
  });

  const options = {
    hostname: 'localhost',
    port: 5170,
    path: '/v1/identify',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = http.request(options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log('Identify Status:', res.statusCode);
      console.log('Identify Response:', body);
    });
  });

  req.on('error', e => console.error(e));
  req.write(data);
  req.end();
}

test().catch(console.error).finally(() => prisma.$disconnect());
