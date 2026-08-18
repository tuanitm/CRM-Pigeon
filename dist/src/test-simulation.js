"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const data_quality_service_1 = require("./data-quality/data-quality.service");
const prisma_service_1 = require("./shared/prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const prisma = app.get(prisma_service_1.PrismaService);
    const dataQualityService = app.get(data_quality_service_1.DataQualityService);
    console.log('--- Starting System Simulation ---');
    console.log('Seeding Data Quality Rules...');
    await dataQualityService.seedRules();
    console.log('Setting up mock customer...');
    const phone = '+84987654321';
    let customer = await prisma.customer.findUnique({ where: { phone } });
    if (!customer) {
        customer = await prisma.customer.create({
            data: {
                phone,
                fullName: 'Nguyen Test User',
                email: 'testuser@example.com',
            },
        });
    }
    console.log('Creating incomplete baby profile...');
    const babies = await prisma.baby.findMany({
        where: { customerId: customer.id },
    });
    if (babies.length === 0) {
        await prisma.baby.create({
            data: {
                customerId: customer.id,
                name: 'Baby An',
            },
        });
    }
    console.log('Running Data Quality evaluation...');
    await dataQualityService.evaluateCustomerQuality(customer.id);
    const updatedCustomer = await prisma.customer.findUnique({
        where: { id: customer.id },
    });
    console.log(`Customer Data Quality Flag: ${updatedCustomer?.dataQualityFlag}`);
    const flags = await prisma.data_quality_flag_log.findMany({
        where: { customer_id: customer.id, resolved: false },
        include: { data_quality_rule: true },
    });
    console.log(`Active Flags found: ${flags.length}`);
    flags.forEach((f) => {
        console.log(` - Flagged for: ${f.data_quality_rule.code} (${f.flag_reason})`);
    });
    console.log('--- Simulation Complete ---');
    await app.close();
}
bootstrap().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=test-simulation.js.map