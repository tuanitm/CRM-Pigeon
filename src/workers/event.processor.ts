import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { SegmentService } from '../engines/segmentation/segment.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';
import { PointsService } from '../engines/loyalty/points.service';
import { TierService } from '../engines/loyalty/tier.service';
import { MilestoneService } from '../engines/loyalty/milestone.service';
import { ReplenishmentService } from '../engines/replenishment/replenishment.service';

@Processor('events')
export class EventProcessor extends WorkerHost {
  private readonly logger = new Logger(EventProcessor.name);

  constructor(
    private segmentService: SegmentService,
    private journeyRunService: JourneyRunService,
    private pointsService: PointsService,
    private tierService: TierService,
    private milestoneService: MilestoneService,
    private replenishmentService: ReplenishmentService,
  ) {
    super();
  }

  async process(
    job: Job<{
      eventId: string;
      eventType: string;
      customerId?: string;
      properties?: Record<string, any>;
    }>,
  ) {
    const { eventId, eventType, customerId, properties } = job.data;
    this.logger.log(
      `Processing event ${eventId}: ${eventType} for customer ${customerId || 'anonymous'}`,
    );

    if (!customerId) {
      this.logger.debug('Skipping anonymous event — no customer_id');
      return;
    }

    // 1. Evaluate realtime segments
    try {
      await this.segmentService.evaluateRealtimeForCustomer(customerId);
    } catch (err) {
      this.logger.error(`Segment evaluation failed: ${(err as Error).message}`);
    }

    // 2. Check journey triggers
    try {
      await this.journeyRunService.handleEventTrigger(
        eventType,
        customerId,
        properties,
      );
    } catch (err) {
      this.logger.error(`Journey trigger failed: ${(err as Error).message}`);
    }

    // 3. Check milestones
    try {
      await this.milestoneService.checkMilestones(
        customerId,
        properties?.baby_id,
      );
    } catch (err) {
      this.logger.error(`Milestone check failed: ${(err as Error).message}`);
    }

    // 4. Event-specific processing
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

  // ---------- Event-specific handlers ----------

  private async handleOrderCompleted(
    customerId: string,
    props: Record<string, any>,
  ) {
    const { orderId, netAmount, items } = props;

    // Award purchase points (1 point per 10,000 VND)
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

    // Update replenishment cycles for each product
    if (Array.isArray(items)) {
      for (const item of items) {
        if (item.productId) {
          await this.replenishmentService.onProductPurchased(
            customerId,
            item.productId,
            new Date(props.orderedAt || Date.now()),
          );
        }
      }
    }

    // On-demand tier re-evaluation
    await this.tierService.evaluateCustomerTier(customerId);
  }

  private async handleQrScan(customerId: string, props: Record<string, any>) {
    const points = 50; // Fixed points for QR scan
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

  private async handleQuizCompleted(
    customerId: string,
    props: Record<string, any>,
  ) {
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

  private async handleReviewSubmitted(
    customerId: string,
    props: Record<string, any>,
  ) {
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

  private async handleProfileCompleted(customerId: string) {
    await this.pointsService.earnPoints({
      customerId,
      source: 'profile_completion',
      points: 100,
      description: 'Profile completed with all fields',
      idempotencyKey: `profile_completion:${customerId}`,
    });
  }
}
