const { Client } = require('pg');

async function run() {
  const client = new Client({
    connectionString: "postgresql://postgres:IMVPostgres%402026@192.168.30.91:5486/PostgresCRM?schema=public"
  });

  await client.connect();
  console.log('Connected to DB');

  try {
    await client.query(`ALTER TABLE customer ADD COLUMN customer_code VARCHAR(20) UNIQUE;`);
    console.log('Added customer_code successfully');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

run();
