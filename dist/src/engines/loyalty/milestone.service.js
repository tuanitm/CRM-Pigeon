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
var MilestoneService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilestoneService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const points_service_1 = require("./points.service");
let MilestoneService = MilestoneService_1 = class MilestoneService {
    prisma;
    pointsService;
    logger = new common_1.Logger(MilestoneService_1.name);
    constructor(prisma, pointsService) {
        this.prisma = prisma;
        this.pointsService = pointsService;
    }
    async checkMilestones(customerId, babyId) {
        const milestones = await this.prisma.milestone_definition.findMany({
            where: { is_active: true },
            orderBy: { milestone_order: 'asc' },
        });
        const completed = [];
        for (const milestone of milestones) {
            const existing = await this.prisma.milestone_progress.findFirst({
                where: {
                    milestone_id: milestone.id,
                    customer_id: customerId,
                    ...(babyId ? { baby_id: babyId } : {}),
                },
            });
            if (existing?.is_completed)
                continue;
            const criteria = milestone.criteria;
            const progress = await this.evaluateCriteria(customerId, criteria);
            if (existing) {
                await this.prisma.milestone_progress.update({
                    where: { id: existing.id },
                    data: {
                        progress_value: progress.value,
                        is_completed: progress.completed,
                        completed_at: progress.completed ? new Date() : null,
                    },
                });
            }
            else {
                await this.prisma.milestone_progress.create({
                    data: {
                        milestone_id: milestone.id,
                        customer_id: customerId,
                        baby_id: babyId || null,
                        progress_value: progress.value,
                        is_completed: progress.completed,
                        completed_at: progress.completed ? new Date() : null,
                    },
                });
            }
            if (progress.completed && (!existing || !existing.is_completed)) {
                if (milestone.points_reward > 0) {
                    await this.pointsService.earnPoints({
                        customerId,
                        source: 'milestone',
                        points: milestone.points_reward,
                        referenceType: 'milestone_definition',
                        referenceId: milestone.id,
                        description: `Milestone completed: ${milestone.title}`,
                        idempotencyKey: `milestone:${milestone.id}:${customerId}:${babyId || 'none'}`,
                    });
                }
                await this.prisma.$executeRaw `
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'milestone.completed',
            ${JSON.stringify({ milestone_code: milestone.code, title: milestone.title })}::jsonb,
            'system', NOW(), NOW())
        `;
                completed.push(milestone.code);
                this.logger.log(`Milestone completed: ${milestone.code} for customer ${customerId}`);
            }
        }
        return { completed };
    }
    async getMilestoneMap(customerId, babyId) {
        const milestones = await this.prisma.milestone_definition.findMany({
            where: { is_active: true },
            orderBy: { milestone_order: 'asc' },
        });
        const progressRecords = await this.prisma.milestone_progress.findMany({
            where: {
                customer_id: customerId,
                ...(babyId ? { baby_id: babyId } : {}),
            },
        });
        const progressMap = new Map(progressRecords.map((p) => [p.milestone_id, p]));
        return milestones.map((m) => {
            const prog = progressMap.get(m.id);
            return {
                code: m.code,
                title: m.title,
                description: m.description,
                order: m.milestone_order,
                badgeImageUrl: m.badge_image_url,
                celebrationImageUrl: m.celebration_image_url,
                pointsReward: m.points_reward,
                progressValue: Number(prog?.progress_value || 0),
                isCompleted: prog?.is_completed || false,
                completedAt: prog?.completed_at || null,
            };
        });
    }
    async evaluateCriteria(customerId, criteria) {
        const { type, target } = criteria;
        switch (type) {
            case 'order_count': {
                const result = await this.prisma.$queryRaw `
          SELECT COUNT(*)::int as count FROM "order"
          WHERE customer_id = ${customerId}::uuid AND status NOT IN ('cancelled', 'refunded')
        `;
                const count = result[0]?.count || 0;
                return { value: count, completed: count >= target };
            }
            case 'total_spend': {
                const result = await this.prisma.$queryRaw `
          SELECT COALESCE(SUM(net_amount), 0)::float as total FROM "order"
          WHERE customer_id = ${customerId}::uuid AND status NOT IN ('cancelled', 'refunded')
        `;
                return {
                    value: result[0]?.total || 0,
                    completed: (result[0]?.total || 0) >= target,
                };
            }
            case 'profile_fields': {
                const customer = await this.prisma.customer.findUnique({
                    where: { id: customerId },
                });
                if (!customer)
                    return { value: 0, completed: false };
                const fields = [
                    'phone',
                    'email',
                    'fullName',
                    'dateOfBirth',
                    'gender',
                    'avatarUrl',
                ];
                const filled = fields.filter((f) => customer[f] != null).length;
                return { value: filled, completed: filled >= target };
            }
            case 'review_count': {
                const count = await this.prisma.review.count({
                    where: { customerId, status: 'approved' },
                });
                return { value: count, completed: count >= target };
            }
            case 'referral_count': {
                const count = await this.prisma.referral_conversion.count({
                    where: { referrer_id: customerId, status: 'converted' },
                });
                return { value: count, completed: count >= target };
            }
            default:
                return { value: 0, completed: false };
        }
    }
};
exports.MilestoneService = MilestoneService;
exports.MilestoneService = MilestoneService = MilestoneService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        points_service_1.PointsService])
], MilestoneService);
//# sourceMappingURL=milestone.service.js.map