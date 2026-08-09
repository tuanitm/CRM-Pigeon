const { Client } = require('pg');

async function run() {
  const client = new Client({
    connectionString: "postgresql://postgres:IMVPostgres%402026@192.168.30.91:5486/PostgresCRM?schema=public"
  });

  await client.connect();
  console.log('Connected to DB');

  try {
    const res = await client.query(`SELECT id FROM customer WHERE customer_code IS NULL`);
    const customers = res.rows;

    console.log(`Found ${customers.length} customers missing a customer_code.`);

    for (const customer of customers) {
      let code;
      let isUnique = false;

      // Keep generating until we find a unique code (highly likely to be unique on first try)
      while (!isUnique) {
        code = Math.floor(10000000 + Math.random() * 90000000).toString();
        
        try {
          await client.query(`UPDATE customer SET customer_code = $1 WHERE id = $2`, [code, customer.id]);
          isUnique = true;
          console.log(`Assigned code ${code} to customer ${customer.id}`);
        } catch (err) {
          // If unique constraint violation, loop again
          if (err.code !== '23505') { 
            throw err;
          }
        }
      }
    }
    
    console.log('Successfully updated all missing customer codes.');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

run();
