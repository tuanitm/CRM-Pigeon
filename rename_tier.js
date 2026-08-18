const fs = require('fs');
const files = [
  'src/seed.ts',
  'seed.ts',
  'src/engines/loyalty/tier.service.ts',
  'admin-dashboard/src/pages/CustomerDetail360Page.tsx',
  'admin-dashboard/src/pages/CustomersPage.tsx',
  'admin-dashboard/src/pages/DashboardPage.tsx',
  'admin-dashboard/src/pages/Customer360Page.tsx',
  'admin-dashboard/src/pages/LoyaltyPage.tsx',
  'customer-portal/src/App.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace 'MEMBER' with 'BRONZE'
    content = content.replace(/'MEMBER'/g, "'BRONZE'");
    content = content.replace(/MEMBER:/g, "BRONZE:");
    content = content.replace(/MEMBER →/g, "BRONZE →");
    
    // Replace 'Member' with 'Bronze'
    content = content.replace(/'Member'/g, "'Bronze'");
    content = content.replace(/>Member</g, ">Bronze<");
    content = content.replace(/\|\| 'Member'/g, "|| 'Bronze'");
    content = content.replace(/Valued Member/g, "Valued Bronze");
    
    // specific variable renames in seeds
    content = content.replace(/const member = /g, "const bronze = ");
    content = content.replace(/'BRONZE': member\.id/g, "'BRONZE': bronze.id");
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated ' + file);
  }
});
