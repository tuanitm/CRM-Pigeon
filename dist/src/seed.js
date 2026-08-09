"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./shared/prisma/prisma.service");
const demoCustomers = [
    { id: 'a1b2c3d4', fullName: 'Nguyen Thi Mai', phone: '+84901234567', email: 'mai@example.com', gender: 'Nữ', source: 'Zalo OA', tier: 'GOLD', points: 2450, orderCount: 12, totalSpend: 15800000, lastOrder: '28/07/2026', babies: [{ name: 'Bé An', stageCode: 'INFANT' }], flag: null },
    { id: 'b2c3d4e5', fullName: 'Tran Van Duc', phone: '+84912345678', email: 'duc@example.com', gender: 'Nam', source: 'Website', tier: 'SILVER', points: 890, orderCount: 5, totalSpend: 6200000, lastOrder: '25/07/2026', babies: [], flag: null },
    { id: 'c3d4e5f6', fullName: 'Le Thi Hoa', phone: '+84923456789', email: null, gender: 'Nữ', source: 'QR Scan', tier: 'MEMBER', points: 120, orderCount: 1, totalSpend: 450000, lastOrder: '20/07/2026', babies: [{ name: 'Bé Bình', stageCode: 'NEWBORN' }, { name: 'Bé Châu', stageCode: 'TODDLER' }], flag: 'missing_email' },
    { id: 'd4e5f6a7', fullName: 'Pham Minh Tuan', phone: '+84934567890', email: 'tuan@example.com', gender: 'Nam', source: 'Referral', tier: 'MEMBER', points: 50, orderCount: 0, totalSpend: 0, lastOrder: null, babies: [], flag: 'no_purchase' },
    { id: 'e5f6a7b8', fullName: 'Vo Thi Lan', phone: '+84945678901', email: 'lan@example.com', gender: 'Nữ', source: 'Zalo Mini App', tier: 'SILVER', points: 1580, orderCount: 8, totalSpend: 10400000, lastOrder: '27/07/2026', babies: [{ name: 'Bé Dũng', stageCode: 'INFANT' }], flag: null },
    { id: 'f6a7b8c9', fullName: 'Hoang Van Nam', phone: '+84956789012', email: 'nam@example.com', gender: 'Nam', source: 'Email Campaign', tier: 'GOLD', points: 3200, orderCount: 15, totalSpend: 22000000, lastOrder: '29/07/2026', babies: [], flag: null },
    { id: 'g7b8c9d0', fullName: 'Bui Thi Thuy', phone: '+84967890123', email: null, gender: 'Nữ', source: 'Walk-in', tier: 'MEMBER', points: 0, orderCount: 0, totalSpend: 0, lastOrder: null, babies: [], flag: 'no_email_no_purchase' },
];
async function bootstrap() {
    console.log('Bootstrapping app context for seeding...');
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const prisma = app.get(prisma_service_1.PrismaService);
    console.log('Seeding demo customers...');
    const gold = await prisma.loyaltyTierConfig.upsert({
        where: { tierCode: 'GOLD' },
        update: {},
        create: { tierCode: 'GOLD', tierName: 'Gold', tierOrder: 3, minNetSpend: 20000000, minDistinctMonths: 0, pointsMultiplier: 1.5 },
    });
    const silver = await prisma.loyaltyTierConfig.upsert({
        where: { tierCode: 'SILVER' },
        update: {},
        create: { tierCode: 'SILVER', tierName: 'Silver', tierOrder: 2, minNetSpend: 5000000, minDistinctMonths: 0, pointsMultiplier: 1.2 },
    });
    const member = await prisma.loyaltyTierConfig.upsert({
        where: { tierCode: 'MEMBER' },
        update: {},
        create: { tierCode: 'MEMBER', tierName: 'Member', tierOrder: 1, minNetSpend: 0, minDistinctMonths: 0, pointsMultiplier: 1.0, isDefault: true },
    });
    const tiers = { 'GOLD': gold.id, 'SILVER': silver.id, 'MEMBER': member.id };
    for (const c of demoCustomers) {
        const exists = await prisma.customer.findFirst({ where: { phone: c.phone } });
        if (exists) {
            console.log(`Customer ${c.phone} already exists, skipping.`);
            continue;
        }
        await prisma.customer.create({
            data: {
                fullName: c.fullName,
                phone: c.phone,
                email: c.email,
                gender: c.gender === 'Nữ' ? 'female' : 'male',
                registrationSource: c.source,
                dataQualityFlag: c.flag,
                customerType: 'End user',
                loyaltyAccount: {
                    create: {
                        tierId: tiers[c.tier] || member.id,
                        pointsBalance: c.points,
                        pointsLifetime: c.points,
                        pointsRedeemed: 0,
                        pointsExpired: 0,
                    }
                },
                babies: {
                    create: c.babies.map(b => ({
                        name: b.name,
                        stageCode: b.stageCode,
                        estimatedDOB: new Date(),
                    }))
                }
            }
        });
        console.log(`Created customer: ${c.fullName}`);
    }
    console.log('Seeding done.');
    await app.close();
}
bootstrap().catch(console.error);
//# sourceMappingURL=seed.js.map