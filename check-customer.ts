import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function checkCustomer() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();

  try {
    const res = await client.query(`SELECT id, phone, customer_code, pin_code, is_active FROM "customer" WHERE customer_code = '29449980'`);
    console.log(res.rows);
  } finally {
    await client.end();
  }
}

checkCustomer();
