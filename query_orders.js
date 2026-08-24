const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.order.findMany({ take: 1, orderBy: { orderedAt: 'desc' } })
  .then(orders => {
    console.log(orders);
  })
  .finally(() => prisma.$disconnect());
