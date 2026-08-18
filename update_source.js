const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const result = await prisma.customer.updateMany({
    where: { registrationSource: 'api' },
    data: { registrationSource: 'Portal' }
  });
  console.log(`Updated ${result.count} customers`);
}

run().finally(() => prisma.$disconnect());
