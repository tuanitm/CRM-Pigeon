const http = require('http');

const data = JSON.stringify({
  phone: "0911223344",
  fullName: "Test User",
  pinCode: "123456",
  dateOfBirth: "1990-01-01",
  address: "123 Test St",
  email: "test@example.com",
  babies: [],
  isOnboardingCompletion: true
});

const options = {
  hostname: 'localhost',
  port: 5170,
  path: '/v1/customers',
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
    console.log('Status Code:', res.statusCode);
    console.log('Response:', body);
  });
});

req.on('error', e => console.error(e));
req.write(data);
req.end();
