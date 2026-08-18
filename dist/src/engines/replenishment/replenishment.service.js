"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ReplenishmentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplenishmentService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
let ReplenishmentService = ReplenishmentService_1 = class ReplenishmentService {
    prisma;
    logger = new common_1.Logger(ReplenishmentService_1.name);
    TRIGGER_PERCENTAGE = 0.8;
    EWMA_ALPHA = 0.3;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkDueReplenishments() {
        this.logger.log('Starting replenishment due check...');
        const now = new Date();
        const dueSchedules = await this.prisma.replenishment_schedule.findMany({
            where: {
                is_active: true,
                next_reminder_at: { lte: now },
            },
            include: {
                product: { select: { id: true, name: true, sku: true } },
            },
        });
        let firedCount = 0;
        for (const schedule of dueSchedules) {
            await this.prisma.$executeRaw `
        INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
        VALUES (uuid_generate_v4(), ${schedule.customer_id}::uuid, 'replenishment.due',
          ${JSON.stringify({
                product_id: schedule.product_id,
                product_name: schedule.product?.name,
                product_sku: schedule.product?.sku,
                cycle_days: schedule.cycle_days,
                cycle_source: schedule.cycle_source,
            })}::jsonb,
          'system', NOW(), NOW())
      `;
            await this.prisma.replenishment_schedule.update({
                where: { id: schedule.id },
                data: { reminder_count: schedule.reminder_count + 1 },
            });
            firedCount++;
        }
        this.logger.log(`Replenishment check complete: ${firedCount} reminders fired`);
    }
    async onProductPurchased(customerId, productId, orderedAt) {
        const personalCycle = await this.calculatePersonalCycle(customerId, productId);
        const productRule = await this.getProductLifecycleRule(productId, customerId);
        const globalAvg = await this.getGlobalAverageCycle(productId);
        let cycleDays;
        let cycleSource;
        if (personalCycle !== null && personalCycle > 0) {
            cycleDays = personalCycle;
            cycleSource = 'personal_cycle';
        }
        else if (productRule !== null) {
            cycleDays = productRule;
            cycleSource = 'product_rule';
        }
        else if (globalAvg !== null && globalAvg > 0) {
            cycleDays = globalAvg;
            cycleSource = 'global_average';
        }
        else {
            cycleDays = 30;
            cycleSource = 'default';
        }
        const triggerDays = Math.floor(cycleDays * this.TRIGGER_PERCENTAGE);
        const nextReminderAt = new Date(orderedAt);
        nextReminderAt.setDate(nextReminderAt.getDate() + triggerDays);
        const existing = await this.prisma.replenishment_schedule.findFirst({
            where: { customer_id: customerId, product_id: productId },
        });
        if (existing) {
            const smoothedDays = Math.round(this.EWMA_ALPHA * cycleDays +
                (1 - this.EWMA_ALPHA) * existing.cycle_days);
            await this.prisma.replenishment_schedule.update({
                where: { id: existing.id },
                data: {
                    cycle_days: smoothedDays,
                    cycle_source: cycleSource,
                    last_purchase_at: orderedAt,
                    next_reminder_at: nextReminderAt,
                    is_active: true,
                    reminder_count: 0,
                },
            });
        }
        else {
            await this.prisma.replenishment_schedule.create({
                data: {
                    customer_id: customerId,
                    product_id: productId,
                    cycle_days: cycleDays,
                    cycle_source: cycleSource,
                    last_purchase_at: orderedAt,
                    next_reminder_at: nextReminderAt,
                    is_active: true,
                },
            });
        }
        this.logger.log(`Replenishment: ${customerId} / ${productId} — ${cycleDays}d (${cycleSource})`);
    }
    async calculatePersonalCycle(customerId, productId) {
        const purchases = await this.prisma.$queryRaw `
      SELECT o.ordered_at
      FROM "order" o
      JOIN order_item oi ON oi.order_id = o.id
      WHERE o.customer_id = ${customerId}::uuid
        AND oi.product_id = ${productId}::uuid
        AND o.status NOT IN ('cancelled', 'refunded')
      ORDER BY o.ordered_at ASC
    `;
        if (purchases.length < 2)
            return null;
        const intervals = [];
        for (let i = 1; i < purchases.length; i++) {
            const diffMs = new Date(purchases[i].ordered_at).getTime() -
                new Date(purchases[i - 1].ordered_at).getTime();
            intervals.push(diffMs / (1000 * 60 * 60 * 24));
        }
        let ewma = intervals[0];
        for (let i = 1; i < intervals.length; i++) {
            ewma = this.EWMA_ALPHA * intervals[i] + (1 - this.EWMA_ALPHA) * ewma;
        }
        return Math.round(ewma);
    }
    async getProductLifecycleRule(productId, customerId) {
        const baby = await this.prisma.baby.findFirst({
            where: { customerId, isBorn: true },
            orderBy: { dateOfBirth: 'desc' },
            select: { stageCode: true },
        });
        if (baby?.stageCode) {
            const stageRule = await this.prisma.productLifecycleRule.findFirst({
                where: { productId, stageCode: baby.stageCode },
            });
            if (stageRule)
                return stageRule.replaceDays;
        }
        const genericRule = await this.prisma.productLifecycleRule.findFirst({
            where: { productId, stageCode: null },
        });
        return genericRule?.replaceDays || null;
    }
    async getGlobalAverageCycle(productId) {
        const result = await this.prisma.product_purchase_cycle.findFirst({
            where: { product_id: productId },
        });
        return result?.median_days || null;
    }
};
exports.ReplenishmentService = ReplenishmentService;
__decorate([
    (0, schedule_1.Cron)('0 21 * * *', { name: 'replenishment-check', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReplenishmentService.prototype, "checkDueReplenishments", null);
exports.ReplenishmentService = ReplenishmentService = ReplenishmentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReplenishmentService);
//# sourceMappingURL=replenishment.service.js.map