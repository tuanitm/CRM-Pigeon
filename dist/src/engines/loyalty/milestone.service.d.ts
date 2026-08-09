import { PrismaService } from '../../shared/prisma/prisma.service';
import { PointsService } from './points.service';
export declare class MilestoneService {
    private prisma;
    private pointsService;
    private readonly logger;
    constructor(prisma: PrismaService, pointsService: PointsService);
    checkMilestones(customerId: string, babyId?: string): Promise<{
        completed: string[];
    }>;
    getMilestoneMap(customerId: string, babyId?: string): Promise<{
        code: string;
        title: string;
        description: string | null;
        order: number;
        badgeImageUrl: string | null;
        celebrationImageUrl: string | null;
        pointsReward: number;
        progressValue: number;
        isCompleted: boolean;
        completedAt: Date | null;
    }[]>;
    private evaluateCriteria;
}
