import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { PointsService } from './points.service';

/**
 * Milestone Service — 12-milestone journey with badges and celebrations.
 * Awards points on milestone completion. Generates shareable celebration images.
 */
@Injectable()
export class MilestoneService {
  private readonly logger = new Logger(MilestoneService.name);

  constructor(
    private prisma: PrismaService,
    private pointsService: PointsService,
  ) {}

  /**
   * Check and advance milestone progress for a customer.
   * Called after relevant events (order, quiz, profile update, etc.).
   */
  async checkMilestones(
    customerId: string,
    babyId?: string,
  ): Promise<{ completed: string[] }> {
    const milestones = await this.prisma.milestone_definition.findMany({
      where: { is_active: true },
      orderBy: { milestone_order: 'asc' },
    });

    const completed: string[] = [];

    for (const milestone of milestones) {
      // Check if already completed
      const existing = await this.prisma.milestone_progress.findFirst({
        where: {
          milestone_id: milestone.id,
          customer_id: customerId,
          ...(babyId ? { baby_id: babyId } : {}),
        },
      });

      if (existing?.is_completed) continue;

      // Evaluate criteria
      const criteria = milestone.criteria as Record<string, any>;
      const progress = await this.evaluateCriteria(customerId, criteria);

      if (existing) {
        // Update progress
        await this.prisma.milestone_progress.update({
          where: { id: existing.id },
          data: {
            progress_value: progress.value,
            is_completed: progress.completed,
            completed_at: progress.completed ? new Date() : null,
          },
        });
      } else {
        // Create new progress record
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

      // Award points if just completed
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

        // Generate milestone event
        await this.prisma.$executeRaw`
          INSERT INTO event (id, customer_id, event_type, properties, source, occurred_at, received_at)
          VALUES (uuid_generate_v4(), ${customerId}::uuid, 'milestone.completed',
            ${JSON.stringify({ milestone_code: milestone.code, title: milestone.title })}::jsonb,
            'system', NOW(), NOW())
        `;

        completed.push(milestone.code);
        this.logger.log(
          `Milestone completed: ${milestone.code} for customer ${customerId}`,
        );
      }
    }

    return { completed };
  }

  /**
   * Get milestone journey map for a customer (for display in WordPress plugin).
   */
  async getMilestoneMap(customerId: string, babyId?: string) {
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

    const progressMap = new Map(
      progressRecords.map((p) => [p.milestone_id, p]),
    );

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

  private async evaluateCriteria(
    customerId: string,
    criteria: Record<string, any>,
  ): Promise<{ value: number; completed: boolean }> {
    const { type, target } = criteria;

    switch (type) {
      case 'order_count': {
        const result = await this.prisma.$queryRaw`
          SELECT COUNT(*)::int as count FROM "order"
          WHERE customer_id = ${customerId}::uuid AND status NOT IN ('cancelled', 'refunded')
        `;
        const count = result[0]?.count || 0;
        return { value: count, completed: count >= target };
      }
      case 'total_spend': {
        const result = await this.prisma.$queryRaw`
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
        if (!customer) return { value: 0, completed: false };
        const fields = [
          'phone',
          'email',
          'fullName',
          'dateOfBirth',
          'gender',
          'avatarUrl',
        ];
        const filled = fields.filter(
          (f) => (customer as any)[f] != null,
        ).length;
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
}
