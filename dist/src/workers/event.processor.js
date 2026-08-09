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
var EventProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const common_1 = require("@nestjs/common");
const segment_service_1 = require("../engines/segmentation/segment.service");
const journey_run_service_1 = require("../engines/journey/journey-run.service");
const points_service_1 = require("../engines/loyalty/points.service");
const tier_service_1 = require("../engines/loyalty/tier.service");
const milestone_service_1 = require("../engines/loyalty/milestone.service");
const replenishment_service_1 = require("../engines/replenishment/replenishment.service");
let EventProcessor = EventProcessor_1 = class EventProcessor extends bullmq_1.WorkerHost {
    segmentService;
    journeyRunService;
    pointsService;
    tierService;
    milestoneService;
    replenishmentService;
    logger = new common_1.Logger(EventProcessor_1.name);
    constructor(segmentService, journeyRunService, pointsService, tierService, milestoneService, replenishmentService) {
        super();
        this.segmentService = segmentService;
        this.journeyRunService = journeyRunService;
        this.pointsService = pointsService;
        this.tierService = tierService;
        this.milestoneService = milestoneService;
        this.replenishmentService = replenishmentService;
    }
    async process(job) {
        const { eventId, eventType, customerId, properties } = job.data;
        this.logger.log(`Processing event ${eventId}: ${eventType} for customer ${customerId || 'anonymous'}`);
        if (!customerId) {
            this.logger.debug('Skipping anonymous event — no customer_id');
            return;
        }
        try {
            await this.segmentService.evaluateRealtimeForCustomer(customerId);
        }
        catch (err) {
            this.logger.error(`Segment evaluation failed: ${err.message}`);
        }
        try {
            await this.journeyRunService.handleEventTrigger(eventType, customerId, properties);
        }
        catch (err) {
            this.logger.error(`Journey trigger failed: ${err.message}`);
        }
        try {
            await this.milestoneService.checkMilestones(customerId, properties?.baby_id);
        }
        catch (err) {
            this.logger.error(`Milestone check failed: ${err.message}`);
        }
        switch (eventType) {
            case 'order.completed':
                await this.handleOrderCompleted(customerId, properties || {});
                break;
            case 'serial.scanned':
                await this.handleQrScan(customerId, properties || {});
                break;
            case 'quiz.completed':
                await this.handleQuizCompleted(customerId, properties || {});
                break;
            case 'review.submitted':
                await this.handleReviewSubmitted(customerId, properties || {});
                break;
            case 'profile.completed':
                await this.handleProfileCompleted(customerId);
                break;
            default:
                this.logger.debug(`No loyalty handler for event type: ${eventType}`);
        }
    }
    async handleOrderCompleted(customerId, props) {
        const { orderId, netAmount, items } = props;
        if (netAmount && netAmount > 0) {
            const points = Math.floor(netAmount / 10000);
            if (points > 0) {
                await this.pointsService.earnPoints({
                    customerId,
                    source: 'purchase',
                    points,
                    referenceType: 'order',
                    referenceId: orderId,
                    description: `Purchase ${netAmount.toLocaleString()} VND`,
                    idempotencyKey: `purchase:${orderId}`,
                });
            }
        }
        if (Array.isArray(items)) {
            for (const item of items) {
                if (item.productId) {
                    await this.replenishmentService.onProductPurchased(customerId, item.productId, new Date(props.orderedAt || Date.now()));
                }
            }
        }
        await this.tierService.evaluateCustomerTier(customerId);
    }
    async handleQrScan(customerId, props) {
        const points = 50;
        await this.pointsService.earnPoints({
            customerId,
            source: 'qr_scan',
            points,
            referenceType: 'product_serial',
            referenceId: props.serialId,
            description: 'QR code scan verification',
            idempotencyKey: `qr:${props.serialId}:${customerId}`,
        });
    }
    async handleQuizCompleted(customerId, props) {
        const points = props.pointsReward || 30;
        await this.pointsService.earnPoints({
            customerId,
            source: 'quiz',
            points,
            referenceType: 'quiz_definition',
            referenceId: props.quizId,
            description: `Quiz completed: ${props.quizTitle || 'Unknown'}`,
            idempotencyKey: `quiz:${props.quizId}:${customerId}`,
        });
    }
    async handleReviewSubmitted(customerId, props) {
        const points = props.isVerifiedPurchase ? 50 : 20;
        await this.pointsService.earnPoints({
            customerId,
            source: 'review',
            points,
            referenceType: 'review',
            referenceId: props.reviewId,
            description: `Product review submitted`,
            idempotencyKey: `review:${props.reviewId}:${customerId}`,
        });
    }
    async handleProfileCompleted(customerId) {
        await this.pointsService.earnPoints({
            customerId,
            source: 'profile_completion',
            points: 100,
            description: 'Profile completed with all fields',
            idempotencyKey: `profile_completion:${customerId}`,
        });
    }
};
exports.EventProcessor = EventProcessor;
exports.EventProcessor = EventProcessor = EventProcessor_1 = __decorate([
    (0, bullmq_1.Processor)('events'),
    __metadata("design:paramtypes", [segment_service_1.SegmentService,
        journey_run_service_1.JourneyRunService,
        points_service_1.PointsService,
        tier_service_1.TierService,
        milestone_service_1.MilestoneService,
        replenishment_service_1.ReplenishmentService])
], EventProcessor);
//# sourceMappingURL=event.processor.js.map