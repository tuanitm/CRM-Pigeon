import { PrismaClient } from './generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@192.168.30.91:5486/PostgresCRM';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const defaultConditions = [
    {
      code: 'customer_type',
      name: 'Customer Type',
      type: 'string',
      source: 'customer',
      description: 'End user, Outlet, or Keyshop',
    },
    {
      code: 'tier',
      name: 'Customer Tier',
      type: 'string',
      source: 'customer',
      description: 'Customer loyalty tier (e.g. Platinum, VIP)',
    },
    {
      code: 'total_purchase_amount',
      name: 'Total Purchase Amount',
      type: 'number',
      source: 'loyalty_account',
      description: 'Total lifetime spend of the customer',
    },
    {
      code: 'babyCount',
      name: 'Total Children (Baby Count)',
      type: 'number',
      source: 'database_query',
      description: 'Number of children added to profile',
    },
    {
      code: 'pointsBalance',
      name: 'Points Balance',
      type: 'number',
      source: 'loyalty_account',
      description: 'Current points balance',
    }
  ];

  console.log('Starting seed...');
  for (const condition of defaultConditions) {
    await prisma.conditionDefinition.upsert({
      where: { code: condition.code },
      update: {},
      create: condition,
    });
    console.log(`Upserted condition: ${condition.code}`);
  }
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
