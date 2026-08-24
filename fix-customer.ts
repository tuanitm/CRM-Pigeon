import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function fixCustomer() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  await client.connect();
  console.log('Connected to DB');

  try {
    const res1 = await client.query(`SELECT id, phone, customer_code FROM "customer" WHERE customer_code = '29449980' OR phone LIKE '%909628791%'`);
    console.log('Found Customers:', res1.rows);

    if (res1.rows.length > 0) {
      const targetId = res1.rows.find(c => c.customer_code === '29449980')?.id || res1.rows[0].id;
      console.log('Updating customer:', targetId, 'to phone +84909628791');
      await client.query(`UPDATE "customer" SET phone = '+84909628791' WHERE id = $1`, [targetId]);
      
      const res2 = await client.query(`SELECT id, phone, customer_code FROM "customer" WHERE id = $1`, [targetId]);
      console.log('After Update:', res2.rows);
    }

  } catch (err) {
    console.error('Error', err);
  } finally {
    await client.end();
  }
}

fixCustomer();
