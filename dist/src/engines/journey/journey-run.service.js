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
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../shared/prisma/prisma.service");
const journey_engine_service_1 = require("./journey-engine.service");
const MANDATORY_JOURNEYS = [
    {
        code: 'JRN_WELCOME_ONBOARDING',
        name: 'Welcome Onboarding',
        description: 'Onboarding reward flow when a new customer completes registration',
        triggerEvent: 'customer.profile_completed',
        hasControlGroup: false,
        graph: {
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_welcome_msg',
                },
                send_welcome_msg: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'WELCOME_ONBOARDING_01' },
                    next: 'end_completed',
                },
                end_completed: {
                    type: 'exit',
                    config: { reason: 'welcome_onboarding_complete' },
                },
            },
        },
    },
    {
        code: 'JRN_WELCOME_BABY',
        name: 'Welcome Baby Onboarding',
        description: 'Onboarding sequence after baby profile creation',
        triggerEvent: 'baby.profile_created',
        hasControlGroup: false,
        graph: {
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_welcome',
                },
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
        description: 'Encourage first-time buyers to make a second purchase',
        triggerEvent: 'order.completed',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: false,
        graph: {
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_recommendation',
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
                end_completed: {
                    type: 'exit',
                    config: { reason: 'sequence_complete' },
                },
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
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_reminder',
                },
                send_reminder: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'REPLENISH_REMIND_01' },
                    next: 'wait_3d',
                },
                wait_3d: {
                    type: 'wait',
                    config: { duration_hours: 72 },
                    next: 'send_followup',
                },
                send_followup: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'REPLENISH_FOLLOWUP_01' },
                    next: 'end_completed',
                },
                end_completed: { type: 'exit', config: { reason: 'reminder_sent' } },
            },
        },
    },
    {
        code: 'JRN_CHURN_ALERT',
        name: 'Early Churn Warning',
        description: 'Per-customer cycle churn detection',
        triggerEvent: 'churn.risk_detected',
        exitConditions: { event_type: 'order.completed' },
        hasControlGroup: true,
        controlGroupPct: 10,
        graph: {
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_winback',
                },
                send_winback: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'CHURN_ALERT_01' },
                    next: 'wait_5d',
                },
                wait_5d: {
                    type: 'wait',
                    config: { duration_hours: 120 },
                    next: 'send_incentive',
                },
                send_incentive: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'CHURN_INCENTIVE_01' },
                    next: 'end_completed',
                },
                end_completed: {
                    type: 'exit',
                    config: { reason: 'churn_sequence_complete' },
                },
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
                    next: 'award_reward',
                },
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
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
                    next: 'send_email_rescue',
                },
                send_email_rescue: {
                    type: 'action',
                    config: { channel: 'email', template_code: 'CART_RESCUE_EMAIL_01' },
                    next: 'end_completed',
                },
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
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_nudge',
                },
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
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_miss_you',
                },
                send_miss_you: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'REACTIVATION_01' },
                    next: 'wait_7d',
                },
                wait_7d: {
                    type: 'wait',
                    config: { duration_hours: 168 },
                    next: 'send_incentive',
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
                end_completed: {
                    type: 'exit',
                    config: { reason: 'reactivation_sequence_complete' },
                },
            },
        },
    },
    {
        code: 'JRN_BIRTHDAY_WISH',
        name: 'Birthday Wish',
        description: 'Send birthday greeting and optional reward to customers on their birthday',
        triggerEvent: 'customer.birthday_today',
        hasControlGroup: false,
        graph: {
            start_node: 'award_reward',
            nodes: {
                award_reward: {
                    type: 'action_reward',
                    config: { rewards: [] },
                    next: 'send_birthday_msg',
                },
                send_birthday_msg: {
                    type: 'action',
                    config: { channel: 'zns', template_code: 'BIRTHDAY_WISH_01' },
                    next: 'end_completed',
                },
                end_completed: {
                    type: 'exit',
                    config: { reason: 'birthday_wish_sent' },
                },
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
    async checkBirthdaysToday() {
        this.logger.log('Birthday cron: scanning for customers with birthdays today...');
        const journey = await this.prisma.journey.findUnique({
            where: { code: 'JRN_BIRTHDAY_WISH' },
        });
        if (!journey || journey.status !== 'active') {
            this.logger.log('Birthday cron: JRN_BIRTHDAY_WISH journey is not active, skipping.');
            return;
        }
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const customers = (await this.prisma.$queryRawUnsafe(`SELECT id FROM customer WHERE EXTRACT(MONTH FROM date_of_birth) = $1 AND EXTRACT(DAY FROM date_of_birth) = $2`, month, day));
        this.logger.log(`Birthday cron: found ${customers.length} customers with birthdays today.`);
        for (const customer of customers) {
            try {
                await this.journeyEngine.enterJourney(journey.id, customer.id);
                this.logger.log(`Birthday cron: triggered JRN_BIRTHDAY_WISH for customer ${customer.id}`);
            }
            catch (err) {
                this.logger.warn(`Birthday cron: failed to trigger for customer ${customer.id}: ${err.message}`);
            }
        }
    }
    async seedMandatoryJourneys() {
        for (const jrn of MANDATORY_JOURNEYS) {
            const existing = await this.prisma.journey.findUnique({
                where: { code: jrn.code },
            });
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
            else if (existing.version === 1) {
                await this.prisma.journey.update({
                    where: { code: jrn.code },
                    data: {
                        graph: jrn.graph,
                        triggerEvent: jrn.triggerEvent,
                        exitConditions: jrn.exitConditions || {},
                        hasControlGroup: jrn.hasControlGroup,
                        controlGroupPct: jrn.controlGroupPct || 0,
                    },
                });
                this.logger.log(`Updated default graph for: ${jrn.code}`);
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
            select: {
                status: true,
                exit_reason: true,
                entered_at: true,
                exited_at: true,
            },
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
__decorate([
    (0, schedule_1.Cron)('0 8 * * *', { name: 'birthday-wish-check', timeZone: 'UTC' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JourneyRunService.prototype, "checkBirthdaysToday", null);
exports.JourneyRunService = JourneyRunService = JourneyRunService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        journey_engine_service_1.JourneyEngineService])
], JourneyRunService);
//# sourceMappingURL=journey-run.service.js.map