import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function backfill() {
  console.log('Starting backfill of customer codes...');
  
  const customers = await prisma.customer.findMany({
    where: {
      OR: [
        { customerCode: null },
        { customerCode: '' }
      ]
    }
  });

  console.log(`Found ${customers.length} customers missing a code.`);

  let updated = 0;
  for (const customer of customers) {
    const newCode = 'CUS' + Date.now().toString().slice(-4) + Math.floor(100 + Math.random() * 900).toString();
    
    await prisma.customer.update({
      where: { id: customer.id },
      data: { customerCode: newCode }
    });
    
    updated++;
    // Small delay to ensure timestamp part of code changes and avoid potential (though unlikely) unique constraint violations
    await new Promise(resolve => setTimeout(resolve, 5));
  }

  console.log(`Successfully backfilled ${updated} customer codes.`);
}

backfill()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
