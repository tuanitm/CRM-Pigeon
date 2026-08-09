import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { SegmentService } from '../engines/segmentation/segment.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';
import { PointsService } from '../engines/loyalty/points.service';
import { TierService } from '../engines/loyalty/tier.service';
import { MilestoneService } from '../engines/loyalty/milestone.service';
import { ReplenishmentService } from '../engines/replenishment/replenishment.service';
export declare class EventProcessor extends WorkerHost {
    private segmentService;
    private journeyRunService;
    private pointsService;
    private tierService;
    private milestoneService;
    private replenishmentService;
    private readonly logger;
    constructor(segmentService: SegmentService, journeyRunService: JourneyRunService, pointsService: PointsService, tierService: TierService, milestoneService: MilestoneService, replenishmentService: ReplenishmentService);
    process(job: Job<{
        eventId: string;
        eventType: string;
        customerId?: string;
        properties?: Record<string, any>;
    }>): Promise<void>;
    private handleOrderCompleted;
    private handleQrScan;
    private handleQuizCompleted;
    private handleReviewSubmitted;
    private handleProfileCompleted;
}
