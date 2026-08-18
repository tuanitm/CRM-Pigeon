const fs = require('fs');
['src/seed.ts', 'seed.ts', 'src/engines/loyalty/tier.service.ts'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/'MEMBER'/g, "'BRONZE'");
    content = content.replace(/MEMBER:/g, "BRONZE:");
    content = content.replace(/MEMBER →/g, "BRONZE →");
    content = content.replace(/'Member'/g, "'Bronze'");
    content = content.replace(/const member = /g, "const bronze = ");
    content = content.replace(/BRONZE: member\.id/g, "BRONZE: bronze.id");
    content = content.replace(/\|\| member\.id/g, "|| bronze.id");
    fs.writeFileSync(file, content, 'utf-8');
    console.log("Updated " + file);
  }
});
