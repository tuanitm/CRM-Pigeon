import { PrismaClient } from './generated/prisma/client/index.js';
const prisma = new PrismaClient();

async function main() {
  const customerByCode = await prisma.customer.findUnique({ where: { customerCode: '29449980' } });
  console.log('Customer by Code:', customerByCode);

  const customerByPhone = await prisma.customer.findMany({ 
    where: { phone: { contains: '909628791' } } 
  });
  console.log('Customer by Phone:', customerByPhone);
}

main().catch(console.error).finally(() => prisma.$disconnect());
