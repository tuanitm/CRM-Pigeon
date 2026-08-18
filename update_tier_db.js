const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  await prisma.loyaltyTierConfig.updateMany({
    where: { tierCode: 'MEMBER' },
    data: { tierCode: 'BRONZE', tierName: 'Bronze' }
  });
  console.log('Tier updated in DB');
}
run().finally(() => prisma.$disconnect());
