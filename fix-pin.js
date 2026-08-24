const bcrypt = require('bcrypt');
const { Client } = require('pg');
require('dotenv').config();

async function fixCustomer() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();

  try {
    const hashed = await bcrypt.hash('123456', 10);
    const res = await client.query(`UPDATE "customer" SET pin_code = $1 WHERE customer_code = '29449980' RETURNING id`, [hashed]);
    console.log('Updated customer:', res.rows[0]);
  } catch(e) {
    console.error(e);
  } finally {
    await client.end();
  }
}

fixCustomer();
