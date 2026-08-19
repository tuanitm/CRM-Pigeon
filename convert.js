const fs = require('fs');

const data = fs.readFileSync('pigeonlogo.jpg');
const base64 = data.toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/jpeg;base64,${base64}" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" />
</svg>`;

const targets = [
  'admin-dashboard/public/favicon.svg',
  'customer-portal/public/favicon.svg',
  'zalo-mini-app/public/favicon.svg'
];

targets.forEach(t => {
  if (fs.existsSync(t)) {
    fs.writeFileSync(t, svg);
    console.log('Updated ' + t);
  }
});
