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
var JourneyRunService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JourneyRunService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const journey_engine_service_1 = require("./journey-engine.service");
const MANDATORY_JOURNEYS = [
    {
        code: 'JRN_WELCOME_BABY',
        name: 'Welcome Baby Onboarding',
        description: 'Onboarding sequence after baby profile creation',
        triggerEvent: 'baby.profile_created',
        hasControlGroup: false,
        graph: {
            start_node: 'send_welcome',
            nodes: {
                send_welcome: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'WELCOME_BABY_01' },
                    next: 'wait_24h',
                },
                wait_24h: {
                    type: 'wait',
                    config: { duration_hours: 24 },
                    next: 'send_tips',
                },
                send_tips: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'BABY_STAGE_TIPS_01' },
                    next: 'wait_72h',
                },
                wait_72h: {
                    type: 'wait',
                    config: { duration_hours: 72 },
                    next: 'check_quiz',
                },
                check_quiz: {
                    type: 'condition',
                    config: { field: 'event_count.quiz.completed', op: 'gte', value: 1 },
                    next_true: 'end_completed',
                    next_false: 'send_quiz_invite',
                },
                send_quiz_invite: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'QUIZ_INVITE_01' },
                    next: 'end_completed',
                },
                end_completed: {
                    type: 'exit',
                    config: { reason: 'onboarding_complete' },
                },
            },
        },
    },
    {
        code: 'JRN_SECOND_ORDER',
        name: 'Convert to Second Order',
        description: 'Encourage first-time buyers to make a second purchase with complementary products',
        triggerEvent: 'order.completed',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: false,
        graph: {
            start_node: 'wait_5d',
            nodes: {
                wait_5d: {
                    type: 'wait',
                    config: { duration_hours: 120 },
                    next: 'check_second_order',
                },
                check_second_order: {
                    type: 'condition',
                    config: { field: 'event_count.order.completed', op: 'gte', value: 2 },
                    next_true: 'end_success',
                    next_false: 'send_recommendation',
                },
                send_recommendation: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'SECOND_ORDER_REC_01' },
                    next: 'wait_7d',
                },
                wait_7d: {
                    type: 'wait',
                    config: { duration_hours: 168 },
                    next: 'send_reminder',
                },
                send_reminder: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'SECOND_ORDER_REMIND_01' },
                    next: 'end_completed',
                },
                end_success: { type: 'exit', config: { reason: 'second_order_placed' } },
                end_completed: { type: 'exit', config: { reason: 'sequence_complete' } },
            },
        },
    },
    {
        code: 'JRN_REPLENISH',
        name: 'Replenishment Reminder',
        description: 'Reminder at 80% of consumption cycle',
        triggerEvent: 'replenishment.due',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: false,
        graph: {
            start_node: 'send_reminder',
            nodes: {
                send_reminder: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'REPLENISH_REMIND_01' },
                    next: 'wait_3d',
                },
                wait_3d: {
                    type: 'wait',
                    config: { duration_hours: 72 },
                    next: 'check_ordered',
                },
                check_ordered: {
                    type: 'condition',
                    config: { field: 'event_count.order.completed', op: 'gte', value: 1 },
                    next_true: 'end_ordered',
                    next_false: 'send_followup',
                },
                send_followup: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'REPLENISH_FOLLOWUP_01' },
                    next: 'end_completed',
                },
                end_ordered: { type: 'exit', config: { reason: 'customer_reordered' } },
                end_completed: { type: 'exit', config: { reason: 'reminder_sent' } },
            },
        },
    },
    {
        code: 'JRN_CHURN_ALERT',
        name: 'Early Churn Warning',
        description: 'Per-customer cycle churn detection, not global average',
        triggerEvent: 'churn.risk_detected',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: true,
        controlGroupPct: 10,
        graph: {
            start_node: 'send_winback',
            nodes: {
                send_winback: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'CHURN_ALERT_01' },
                    next: 'wait_5d',
                },
                wait_5d: {
                    type: 'wait',
                    config: { duration_hours: 120 },
                    next: 'check_returned',
                },
                check_returned: {
                    type: 'condition',
                    config: { field: 'event_count.order.completed', op: 'gte', value: 1 },
                    next_true: 'end_returned',
                    next_false: 'send_incentive',
                },
                send_incentive: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'CHURN_INCENTIVE_01' },
                    next: 'end_completed',
                },
                end_returned: { type: 'exit', config: { reason: 'customer_returned' } },
                end_completed: { type: 'exit', config: { reason: 'churn_sequence_complete' } },
            },
        },
    },
    {
        code: 'JRN_CART_RESCUE',
        name: 'Abandoned Cart Recovery',
        description: '60-minute trigger for cart abandonment',
        triggerEvent: 'cart.abandoned',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: false,
        graph: {
            start_node: 'wait_60m',
            nodes: {
                wait_60m: {
                    type: 'wait',
                    config: { duration_hours: 1 },
                    next: 'send_rescue',
                },
                send_rescue: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'CART_RESCUE_01' },
                    next: 'wait_24h',
                },
                wait_24h: {
                    type: 'wait',
                    config: { duration_hours: 24 },
                    next: 'check_converted',
                },
                check_converted: {
                    type: 'condition',
                    config: { field: 'event_count.order.completed', op: 'gte', value: 1 },
                    next_true: 'end_converted',
                    next_false: 'send_email_rescue',
                },
                send_email_rescue: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'CART_RESCUE_EMAIL_01' },
                    next: 'end_completed',
                },
                end_converted: { type: 'exit', config: { reason: 'cart_converted' } },
                end_completed: { type: 'exit', config: { reason: 'rescue_complete' } },
            },
        },
    },
    {
        code: 'JRN_TIER_NUDGE',
        name: 'Tier Upgrade Motivation',
        description: 'Nudge customers at 70-85% of next tier threshold',
        triggerEvent: 'segment_entered',
        hasControlGroup: false,
        graph: {
            start_node: 'send_nudge',
            nodes: {
                send_nudge: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'TIER_NUDGE_01' },
                    next: 'wait_7d',
                },
                wait_7d: {
                    type: 'wait',
                    config: { duration_hours: 168 },
                    next: 'send_progress',
                },
                send_progress: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'TIER_PROGRESS_01' },
                    next: 'end_completed',
                },
                end_completed: { type: 'exit', config: { reason: 'nudge_complete' } },
            },
        },
    },
    {
        code: 'JRN_REACTIVATION',
        name: 'Win-back Reactivation',
        description: 'Win-back flow with mandatory control group',
        triggerEvent: 'segment_entered',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: true,
        controlGroupPct: 15,
        graph: {
            start_node: 'send_miss_you',
            nodes: {
                send_miss_you: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'REACTIVATION_01' },
                    next: 'wait_7d',
                },
                wait_7d: {
                    type: 'wait',
                    config: { duration_hours: 168 },
                    next: 'check_returned',
                },
                check_returned: {
                    type: 'condition',
                    config: { field: 'event_count.order.completed', op: 'gte', value: 1 },
                    next_true: 'end_reactivated',
                    next_false: 'send_incentive',
                },
                send_incentive: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'REACTIVATION_OFFER_01' },
                    next: 'wait_14d',
                },
                wait_14d: {
                    type: 'wait',
                    config: { duration_hours: 336 },
                    next: 'send_final',
                },
                send_final: {
                    type: 'action',
                    config: { channel: 'sms', template_code: 'REACTIVATION_FINAL_01' },
                    next: 'end_completed',
                },
                end_reactivated: { type: 'exit', config: { reason: 'customer_reactivated' } },
                end_completed: { type: 'exit', config: { reason: 'reactivation_sequence_complete' } },
            },
        },
    },
];
let JourneyRunService = JourneyRunService_1 = class JourneyRunService {
    prisma;
    journeyEngine;
    logger = new common_1.Logger(JourneyRunService_1.name);
    constructor(prisma, journeyEngine) {
        this.prisma = prisma;
        this.journeyEngine = journeyEngine;
    }
    async onModuleInit() {
        await this.seedMandatoryJourneys();
    }
    async seedMandatoryJourneys() {
        for (const jrn of MANDATORY_JOURNEYS) {
            const existing = await this.prisma.journey.findUnique({ where: { code: jrn.code } });
            if (!existing) {
                await this.prisma.journey.create({
                    data: {
                        code: jrn.code,
                        name: jrn.name,
                        description: jrn.description,
                        triggerEvent: jrn.triggerEvent,
                        graph: jrn.graph,
                        exitConditions: jrn.exitConditions || {},
                        hasControlGroup: jrn.hasControlGroup,
                        controlGroupPct: jrn.controlGroupPct || 0,
                        status: 'draft',
                        version: 1,
                    },
                });
                this.logger.log(`Seeded mandatory journey: ${jrn.code}`);
            }
        }
    }
    async handleEventTrigger(eventType, customerId, properties) {
        const triggeredJourneys = await this.prisma.journey.findMany({
            where: {
                triggerEvent: eventType,
                status: 'active',
            },
        });
        for (const journey of triggeredJourneys) {
            this.logger.log(`Event ${eventType} triggering journey ${journey.code} for customer ${customerId}`);
            await this.journeyEngine.enterJourney(journey.id, customerId, properties);
        }
    }
    async getJourneyPerformance(journeyId) {
        const runs = await this.prisma.journey_run.findMany({
            where: { journey_id: journeyId },
            select: { status: true, exit_reason: true, entered_at: true, exited_at: true },
        });
        const controlGroup = await this.prisma.campaign_control_group.count({
            where: { journey_id: journeyId, group: 'control' },
        });
        const total = runs.length;
        const active = runs.filter((r) => r.status === 'active').length;
        const completed = runs.filter((r) => r.status === 'completed').length;
        const exitReasons = {};
        for (const run of runs) {
            if (run.exit_reason) {
                exitReasons[run.exit_reason] = (exitReasons[run.exit_reason] || 0) + 1;
            }
        }
        return {
            total,
            active,
            completed,
            controlGroupSize: controlGroup,
            exitReasons,
        };
    }
};
exports.JourneyRunService = JourneyRunService;
exports.JourneyRunService = JourneyRunService = JourneyRunService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        journey_engine_service_1.JourneyEngineService])
], JourneyRunService);
//# sourceMappingURL=journey-run.service.js.map