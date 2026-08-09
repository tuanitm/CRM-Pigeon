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
var TierService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TierService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
let TierService = TierService_1 = class TierService {
    prisma;
    logger = new common_1.Logger(TierService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async evaluateAllTiers() {
        this.logger.log('Starting nightly tier evaluation...');
        const tiers = await this.prisma.loyaltyTierConfig.findMany({
            orderBy: { tierOrder: 'desc' },
        });
        const accounts = await this.prisma.loyaltyAccount.findMany({
            include: { tier: true },
        });
        let upgraded = 0;
        let downgraded = 0;
        for (const account of accounts) {
            const metrics = await this.calculateTierMetrics(account.customerId);
            let newTierId = null;
            for (const tier of tiers) {
                if (metrics.netSpend >= Number(tier.minNetSpend) &&
                    metrics.distinctMonths >= tier.minDistinctMonths) {
                    newTierId = tier.id;
                    break;
                }
            }
            if (!newTierId && tiers.length > 0) {
                const defaultTier = tiers.find(t => t.isDefault);
                newTierId = defaultTier?.id || tiers[tiers.length - 1].id;
            }
            if (newTierId && newTierId !== account.tierId) {
                const oldTier = account.tier?.tierCode || 'NONE';
                const newTier = tiers.find((t) => t.id === newTierId);
                await this.prisma.loyaltyAccount.update({
                    where: { id: account.id },
                    data: {
                        tierId: newTierId,
                        netSpend: metrics.netSpend,
                        distinctOrderMonths: metrics.distinctMonths,
                        tierEvaluatedAt: new Date(),
                    },
                });
                const isUpgrade = (newTier?.tierOrder || 0) > (account.tier?.tierOrder || 0);
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${account.customerId}::uuid,
            ${isUpgrade ? 'tier.upgraded' : 'tier.downgraded'},
            ${JSON.stringify({ old_tier: oldTier, new_tier: newTier?.tierCode })}::jsonb,
            'system', NOW(), NOW())
        `;
                if (isUpgrade)
                    upgraded++;
                else
                    downgraded++;
                this.logger.log(`Tier change: ${account.customerId} ${oldTier} → ${newTier?.tierCode}`);
            }
            else {
                await this.prisma.loyaltyAccount.update({
                    where: { id: account.id },
                    data: {
                        netSpend: metrics.netSpend,
                        distinctOrderMonths: metrics.distinctMonths,
                        tierEvaluatedAt: new Date(),
                    },
                });
            }
        }
        this.logger.log(`Tier evaluation complete: ${upgraded} upgraded, ${downgraded} downgraded, ${accounts.length} total`);
    }
    async evaluateCustomerTier(customerId) {
        const metrics = await this.calculateTierMetrics(customerId);
        const tiers = await this.prisma.loyaltyTierConfig.findMany({
            orderBy: { tierOrder: 'desc' },
        });
        let qualifiedTier = tiers.find(t => t.isDefault) || tiers[tiers.length - 1];
        for (const tier of tiers) {
            if (metrics.netSpend >= Number(tier.minNetSpend) && metrics.distinctMonths >= tier.minDistinctMonths) {
                qualifiedTier = tier;
                break;
            }
        }
        return {
            tierCode: qualifiedTier.tierCode,
            netSpend: metrics.netSpend,
            distinctMonths: metrics.distinctMonths,
        };
    }
    async calculateTierMetrics(customerId) {
        const result = await this.prisma.$queryRaw `
      SELECT
        COALESCE(SUM(o.net_amount), 0)::float AS net_spend,
        COUNT(DISTINCT TO_CHAR(o.ordered_at, 'YYYY-MM'))::int AS distinct_months
      FROM "order" o
      JOIN customer c ON c.id = o.customer_id
      WHERE o.customer_id = ${customerId}::uuid
        AND o.status NOT IN ('cancelled', 'refunded')
        AND o.is_gwp = false
        AND o.is_internal = false
        AND c.data_quality_flag IS NULL
    `;
        return {
            netSpend: result[0]?.net_spend || 0,
            distinctMonths: result[0]?.distinct_months || 0,
        };
    }
};
exports.TierService = TierService;
__decorate([
    (0, schedule_1.Cron)('30 20 * * *', { name: 'tier-evaluation', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TierService.prototype, "evaluateAllTiers", null);
exports.TierService = TierService = TierService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TierService);
//# sourceMappingURL=tier.service.js.map