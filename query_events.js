const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
prisma.event.findMany({ take: 5, include: { customer: true }, orderBy: { occurred_at: 'desc' } })
  .then(console.log)
  .finally(() => prisma.$disconnect());
