import { PrismaService } from '../../shared/prisma/prisma.service';
import { RedisService } from '../../shared/redis/redis.service';
interface EarnPointsParams {
    customerId: string;
    source: string;
    points: number;
    referenceType?: string;
    referenceId?: string;
    description?: string;
    idempotencyKey: string;
}
export declare class PointsService {
    private prisma;
    private redis;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService);
    earnPoints(params: EarnPointsParams): Promise<{
        success: boolean;
        newBalance?: number;
        error?: string;
    }>;
    redeemPoints(params: {
        customerId: string;
        points: number;
        referenceType: string;
        referenceId: string;
        description: string;
        idempotencyKey: string;
    }): Promise<{
        success: boolean;
        newBalance?: number;
        error?: string;
    }>;
    processExpiredPoints(): Promise<void>;
    capturePointsLiability(): Promise<void>;
}
export {};
