import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataQualityService } from './data-quality/data-quality.service';
import { PrismaService } from './shared/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);
  const dataQualityService = app.get(DataQualityService);

  console.log('--- Starting System Simulation ---');

  // 1. Seed Data Quality Rules
  console.log('Seeding Data Quality Rules...');
  await dataQualityService.seedRules();

  // 2. Setup a Mock Customer
  console.log('Setting up mock customer...');
  const phone = '+84987654321';
  let customer = await prisma.customer.findUnique({ where: { phone } });
  
  if (!customer) {
    customer = await prisma.customer.create({
      data: {
        phone,
        fullName: 'Nguyen Test User',
        email: 'testuser@example.com',
      }
    });
  }

  // 3. Create a Baby WITHOUT Date of Birth (to trigger Data Quality Rule)
  console.log('Creating incomplete baby profile...');
  const babies = await prisma.baby.findMany({ where: { customerId: customer.id } });
  if (babies.length === 0) {
    await prisma.baby.create({
      data: {
        customerId: customer.id,
        name: 'Baby An',
        // Intentional: missing dateOfBirth and dueDate
      }
    });
  }

  // 4. Run Data Quality Check
  console.log('Running Data Quality evaluation...');
  await dataQualityService.evaluateCustomerQuality(customer.id);

  // Check the customer's flag
  const updatedCustomer = await prisma.customer.findUnique({ where: { id: customer.id } });
  console.log(`Customer Data Quality Flag: ${updatedCustomer?.dataQualityFlag}`);
  
  const flags = await prisma.data_quality_flag_log.findMany({
    where: { customer_id: customer.id, resolved: false },
    include: { data_quality_rule: true }
  });
  
  console.log(`Active Flags found: ${flags.length}`);
  flags.forEach(f => {
    console.log(` - Flagged for: ${f.data_quality_rule.code} (${f.flag_reason})`);
  });

  console.log('--- Simulation Complete ---');
  await app.close();
}

bootstrap().catch(err => {
  console.error(err);
  process.exit(1);
});
