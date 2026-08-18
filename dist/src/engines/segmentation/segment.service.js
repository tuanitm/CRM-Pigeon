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
var SegmentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentService = exports.MANDATORY_SEGMENTS = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const rule_evaluator_service_1 = require("./rule-evaluator.service");
exports.MANDATORY_SEGMENTS = [
    {
        code: 'new_registered_no_order',
        name: 'Registered but never ordered',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'attribute', field: 'customer.phone', op: 'is_not_null' },
                { type: 'event', event_type: 'order.completed', op: 'eq', value: 0 },
            ],
        },
    },
    {
        code: 'first_order_no_second',
        name: 'Completed first order, no second',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'event', event_type: 'order.completed', op: 'eq', value: 1 },
            ],
        },
    },
    {
        code: 'repeat_buyer',
        name: 'Has 2+ orders',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'event', event_type: 'order.completed', op: 'gte', value: 2 },
            ],
        },
    },
    {
        code: 'expecting_mother',
        name: 'Has baby profile with due_date but not yet born',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'attribute', field: 'baby.due_date', op: 'is_not_null' },
                { type: 'attribute', field: 'baby.is_born', op: 'eq', value: false },
            ],
        },
    },
    {
        code: 'newborn_0_6m',
        name: 'Baby aged 0-6 months',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'attribute', field: 'baby.is_born', op: 'eq', value: true },
                {
                    type: 'relative_date',
                    field: 'baby.date_of_birth',
                    op: 'within_days',
                    value: 180,
                },
            ],
        },
    },
    {
        code: 'scanned_qr_never_bought_web',
        name: 'Scanned QR (bought offline) but never bought on website',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'event', event_type: 'serial.scanned', op: 'gte', value: 1 },
                { type: 'event', event_type: 'order.completed', op: 'eq', value: 0 },
            ],
        },
    },
    {
        code: 'high_value_at_risk',
        name: 'Was Champion/Loyal but now At Risk RFM segment',
        rules: {
            operator: 'AND',
            conditions: [
                { type: 'segment', segment_code: 'rfm_at_risk', op: 'member_of' },
                { type: 'event', event_type: 'order.completed', op: 'gte', value: 3 },
            ],
        },
    },
    {
        code: 'cart_abandoner',
        name: 'Abandoned cart in last 7 days',
        rules: {
            operator: 'AND',
            conditions: [
                {
                    type: 'event',
                    event_type: 'cart.abandoned',
                    op: 'gte',
                    value: 1,
                    timeframe_days: 7,
                },
            ],
        },
    },
    {
        code: 'tier_upgrade_candidate',
        name: 'Within 70-85% of next tier threshold',
        rules: {
            operator: 'AND',
            conditions: [
                {
                    type: 'attribute',
                    field: 'loyalty_account.net_spend',
                    op: 'gte',
                    value: 1400000,
                },
                {
                    type: 'attribute',
                    field: 'loyalty_account.net_spend',
                    op: 'lt',
                    value: 1700000,
                },
            ],
        },
    },
    {
        code: 'profile_incomplete',
        name: 'Missing key profile fields',
        rules: {
            operator: 'OR',
            conditions: [
                { type: 'attribute', field: 'customer.full_name', op: 'is_null' },
                { type: 'attribute', field: 'customer.date_of_birth', op: 'is_null' },
                { type: 'attribute', field: 'customer.email', op: 'is_null' },
            ],
        },
    },
];
let SegmentService = SegmentService_1 = class SegmentService {
    prisma;
    ruleEvaluator;
    logger = new common_1.Logger(SegmentService_1.name);
    constructor(prisma, ruleEvaluator) {
        this.prisma = prisma;
        this.ruleEvaluator = ruleEvaluator;
    }
    async seedMandatorySegments() {
        for (const seg of exports.MANDATORY_SEGMENTS) {
            const existing = await this.prisma.segment.findUnique({
                where: { code: seg.code },
            });
            if (!existing) {
                await this.prisma.segment.create({
                    data: {
                        code: seg.code,
                        name: seg.name,
                        rules: seg.rules,
                        refreshMode: 'scheduled',
                        isSystem: true,
                        isActive: true,
                    },
                });
                this.logger.log(`Seeded mandatory segment: ${seg.code}`);
            }
        }
    }
    async refreshAllScheduledSegments() {
        const segments = await this.prisma.segment.findMany({
            where: { isActive: true, refreshMode: 'scheduled' },
        });
        for (const segment of segments) {
            try {
                await this.refreshSegment(segment.id, segment.code, segment.rules);
            }
            catch (err) {
                this.logger.error(`Failed to refresh segment ${segment.code}: ${err.message}`);
            }
        }
    }
    async refreshSegment(segmentId, segmentCode, rules) {
        this.logger.log(`Refreshing segment: ${segmentCode}`);
        const matchingIds = new Set(await this.ruleEvaluator.evaluateForAllCustomers(rules));
        const currentMembers = await this.prisma.segment_membership.findMany({
            where: { segment_id: segmentId, exited_at: null },
            select: { id: true, customer_id: true },
        });
        const currentMemberIds = new Set(currentMembers.map((m) => m.customer_id));
        let entered = 0;
        let exited = 0;
        for (const customerId of matchingIds) {
            if (!currentMemberIds.has(customerId)) {
                await this.prisma.segment_membership.create({
                    data: { segment_id: segmentId, customer_id: customerId },
                });
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_entered',
            ${JSON.stringify({ segment_code: segmentCode })}::jsonb, 'system', NOW(), NOW())
        `;
                entered++;
            }
        }
        for (const member of currentMembers) {
            if (!matchingIds.has(member.customer_id)) {
                await this.prisma.segment_membership.update({
                    where: { id: member.id },
                    data: { exited_at: new Date() },
                });
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${member.customer_id}::uuid, 'segment_exited',
            ${JSON.stringify({ segment_code: segmentCode })}::jsonb, 'system', NOW(), NOW())
        `;
                exited++;
            }
        }
        await this.prisma.segment.update({
            where: { id: segmentId },
            data: { memberCount: matchingIds.size, lastEvaluatedAt: new Date() },
        });
        this.logger.log(`Segment ${segmentCode}: ${entered} entered, ${exited} exited, ${matchingIds.size} total`);
        return { entered, exited };
    }
    async evaluateRealtimeForCustomer(customerId) {
        const realtimeSegments = await this.prisma.segment.findMany({
            where: { isActive: true, refreshMode: 'realtime' },
        });
        for (const segment of realtimeSegments) {
            const matches = await this.ruleEvaluator.evaluateForCustomer(customerId, segment.rules);
            const currentMembership = await this.prisma.segment_membership.findFirst({
                where: {
                    segment_id: segment.id,
                    customer_id: customerId,
                    exited_at: null,
                },
            });
            if (matches && !currentMembership) {
                await this.prisma.segment_membership.create({
                    data: { segment_id: segment.id, customer_id: customerId },
                });
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_entered',
            ${JSON.stringify({ segment_code: segment.code })}::jsonb, 'system', NOW(), NOW())
        `;
            }
            else if (!matches && currentMembership) {
                await this.prisma.segment_membership.update({
                    where: { id: currentMembership.id },
                    data: { exited_at: new Date() },
                });
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'segment_exited',
            ${JSON.stringify({ segment_code: segment.code })}::jsonb, 'system', NOW(), NOW())
        `;
            }
        }
    }
};
exports.SegmentService = SegmentService;
__decorate([
    (0, schedule_1.Cron)('*/30 * * * *', { name: 'segment-refresh' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SegmentService.prototype, "refreshAllScheduledSegments", null);
exports.SegmentService = SegmentService = SegmentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        rule_evaluator_service_1.RuleEvaluatorService])
], SegmentService);
//# sourceMappingURL=segment.service.js.map