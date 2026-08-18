const { PrismaClient } = require('./generated/prisma/index.js');
const prisma = new PrismaClient();
async function run() {
  const res = await prisma.customer.updateMany({ where: { customerType: null }, data: { customerType: 'End user' } });
  console.log('UPDATED:', res);
  await prisma.journey_run.deleteMany({ where: { customer_id: 'c5a8ae8d-625e-4a0c-9c5e-171370171657', journey_id: '7e107cec-6e0b-4893-a39c-74523ee3ff46' } });
  console.log('DELETED STUCK RUN');
  await prisma.$disconnect();
}
run();
