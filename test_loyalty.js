const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5170,
  path: '/v1/loyalty/43b49447-8b6f-4ec8-90c9-c53acc613e97',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('Get Loyalty Status:', res.statusCode);
    console.log('Get Loyalty Response:', body);
  });
});

req.on('error', e => console.error(e));
req.end();
