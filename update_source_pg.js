const { Client } = require('pg');

async function run() {
  const client = new Client({
    connectionString: "postgresql://postgres:IMVPostgres%402026@192.168.30.91:5486/PostgresCRM?schema=public"
  });
  await client.connect();
  const res = await client.query("UPDATE customer SET registration_source = 'Portal' WHERE registration_source = 'api'");
  console.log('Updated ' + res.rowCount + ' customers');
  await client.end();
}

run().catch(console.error);
