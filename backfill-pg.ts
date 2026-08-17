import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function backfill() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();
  console.log('Connected to DB');

  try {
    const res = await client.query(`SELECT id FROM "customer" WHERE customer_code IS NULL OR customer_code = ''`);
    const customers = res.rows;
    
    console.log(`Found ${customers.length} customers missing a code.`);
    
    let updated = 0;
    for (const customer of customers) {
      const newCode = 'CUS' + Date.now().toString().slice(-4) + Math.floor(100 + Math.random() * 900).toString();
      await client.query(`UPDATE "customer" SET customer_code = $1 WHERE id = $2`, [newCode, customer.id]);
      updated++;
      await new Promise(resolve => setTimeout(resolve, 2));
    }
    
    console.log(`Successfully backfilled ${updated} customer codes.`);
  } catch (err) {
    console.error('Error', err);
  } finally {
    await client.end();
  }
}

backfill();
