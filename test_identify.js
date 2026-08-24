const http = require('http');

const data = JSON.stringify({
  phone: "0999888777",
  pinCode: "123456",
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
