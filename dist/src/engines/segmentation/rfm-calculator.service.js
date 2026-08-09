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
var RfmCalculatorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RfmCalculatorService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const RFM_SEGMENT_MAP = {
    champions: { r: [4, 5], f: [4, 5], m: [4, 5], label: 'Champions' },
    loyal_customers: { r: [3, 4, 5], f: [3, 4, 5], m: [3, 4, 5], label: 'Loyal Customers' },
    potential_loyal: { r: [3, 4, 5], f: [1, 2, 3], m: [1, 2, 3], label: 'Potential Loyalists' },
    new_customers: { r: [4, 5], f: [1], m: [1, 2], label: 'New Customers' },
    promising: { r: [3, 4], f: [1], m: [1], label: 'Promising' },
    need_attention: { r: [2, 3], f: [2, 3], m: [2, 3], label: 'Need Attention' },
    about_to_sleep: { r: [2], f: [1, 2], m: [1, 2], label: 'About to Sleep' },
    at_risk: { r: [1, 2], f: [3, 4, 5], m: [3, 4, 5], label: 'At Risk' },
    hibernating: { r: [1], f: [1, 2], m: [1, 2], label: 'Hibernating' },
};
let RfmCalculatorService = RfmCalculatorService_1 = class RfmCalculatorService {
    prisma;
    logger = new common_1.Logger(RfmCalculatorService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async calculateRfm() {
        const startTime = Date.now();
        this.logger.log('Starting nightly RFM calculation...');
        const period = this.getCurrentPeriod();
        try {
            const rawScores = await this.computeRawScores();
            if (rawScores.length === 0) {
                this.logger.warn('No customers with orders found for RFM calculation');
                return;
            }
            const recencyValues = rawScores.map((s) => s.recency_days).sort((a, b) => a - b);
            const frequencyValues = rawScores.map((s) => s.frequency).sort((a, b) => a - b);
            const monetaryValues = rawScores.map((s) => s.monetary).sort((a, b) => a - b);
            const rBounds = this.quintileBoundaries(recencyValues);
            const fBounds = this.quintileBoundaries(frequencyValues);
            const mBounds = this.quintileBoundaries(monetaryValues);
            let insertCount = 0;
            for (const score of rawScores) {
                const rScore = 6 - this.assignQuintile(score.recency_days, rBounds);
                const fScore = this.assignQuintile(score.frequency, fBounds);
                const mScore = this.assignQuintile(score.monetary, mBounds);
                const isDiscountHunter = await this.isDiscountHunter(score.customer_id);
                const rfmSegment = isDiscountHunter
                    ? 'rfm_discount_hunter'
                    : this.mapToSegment(rScore, fScore, mScore);
                await this.prisma.$executeRaw `
          INSERT INTO rfm_snapshot (id, customer_id, period, recency_score, frequency_score, monetary_score, rfm_segment, is_discount_hunter, calculated_at)
          VALUES (uuid_generate_v4(), ${score.customer_id}::uuid, ${period}, ${rScore}, ${fScore}, ${mScore}, ${rfmSegment}, ${isDiscountHunter}, NOW())
          ON CONFLICT (customer_id, period)
          DO UPDATE SET recency_score = ${rScore}, frequency_score = ${fScore}, monetary_score = ${mScore},
                        rfm_segment = ${rfmSegment}, is_discount_hunter = ${isDiscountHunter}, calculated_at = NOW()
        `;
                insertCount++;
            }
            const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
            this.logger.log(`RFM calculation complete: ${insertCount} customers scored in ${elapsed}s for period ${period}`);
        }
        catch (err) {
            this.logger.error(`RFM calculation failed: ${err.message}`, err.stack);
        }
    }
    async computeRawScores() {
        return this.prisma.$queryRaw `
      SELECT
        o.customer_id,
        EXTRACT(DAY FROM NOW() - MAX(o.ordered_at))::int AS recency_days,
        COUNT(DISTINCT o.id)::int AS frequency,
        COALESCE(SUM(o.net_amount), 0)::float AS monetary
      FROM "order" o
      JOIN customer c ON c.id = o.customer_id
      WHERE o.status NOT IN ('cancelled', 'refunded')
        AND o.is_gwp = false
        AND o.is_internal = false
        AND c.data_quality_flag IS NULL
        AND c.is_merged = false
      GROUP BY o.customer_id
      HAVING COUNT(DISTINCT o.id) >= 1
    `;
    }
    async isDiscountHunter(customerId) {
        const result = await this.prisma.$queryRaw `
      SELECT
        COALESCE(SUM(discount_amount), 0) AS total_discount,
        COALESCE(SUM(total_amount), 0) AS total_spend
      FROM "order"
      WHERE customer_id = ${customerId}::uuid
        AND status NOT IN ('cancelled', 'refunded')
        AND is_gwp = false
    `;
        if (!result.length || result[0].total_spend === 0)
            return false;
        const discountRatio = result[0].total_discount / result[0].total_spend;
        return discountRatio > 0.4;
    }
    mapToSegment(r, f, m) {
        for (const [code, def] of Object.entries(RFM_SEGMENT_MAP)) {
            if (def.r.includes(r) && def.f.includes(f) && def.m.includes(m)) {
                return code;
            }
        }
        return 'need_attention';
    }
    quintileBoundaries(sorted) {
        const n = sorted.length;
        if (n < 5)
            return [sorted[0] || 0, sorted[0] || 0, sorted[0] || 0, sorted[0] || 0];
        return [
            sorted[Math.floor(n * 0.2)],
            sorted[Math.floor(n * 0.4)],
            sorted[Math.floor(n * 0.6)],
            sorted[Math.floor(n * 0.8)],
        ];
    }
    assignQuintile(value, bounds) {
        if (value <= bounds[0])
            return 1;
        if (value <= bounds[1])
            return 2;
        if (value <= bounds[2])
            return 3;
        if (value <= bounds[3])
            return 4;
        return 5;
    }
    getCurrentPeriod() {
        const now = new Date();
        const year = now.getFullYear();
        const weekNum = this.getWeekNumber(now);
        return `${year}-W${weekNum.toString().padStart(2, '0')}`;
    }
    getWeekNumber(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
    }
};
exports.RfmCalculatorService = RfmCalculatorService;
__decorate([
    (0, schedule_1.Cron)('0 19 * * *', { name: 'rfm-nightly', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RfmCalculatorService.prototype, "calculateRfm", null);
exports.RfmCalculatorService = RfmCalculatorService = RfmCalculatorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RfmCalculatorService);
//# sourceMappingURL=rfm-calculator.service.js.map