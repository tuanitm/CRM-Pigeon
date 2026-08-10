import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';
export declare class LoyaltyController {
    private prisma;
    private redis;
    constructor(prisma: PrismaService, redis: RedisService);
    getLoyalty(customerId: string): Promise<({
        tier: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tierCode: string;
            tierName: string;
            tierOrder: number;
            minNetSpend: import("@prisma/client-runtime-utils").Decimal;
            minDistinctMonths: number;
            pointsMultiplier: import("@prisma/client-runtime-utils").Decimal;
            benefits: import("@prisma/client/runtime/client").JsonValue | null;
            isDefault: boolean;
        } | null;
        transactions: {
            id: string;
            createdAt: Date;
            description: string | null;
            type: string;
            customerId: string;
            source: string;
            points: number;
            referenceType: string | null;
            referenceId: string | null;
            idempotencyKey: string | null;
            balanceAfter: number;
            expiresAt: Date | null;
            loyaltyAccountId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        tierId: string | null;
        pointsBalance: number;
        pointsLifetime: number;
        pointsRedeemed: number;
        pointsExpired: number;
        netSpend: import("@prisma/client-runtime-utils").Decimal;
        distinctOrderMonths: number;
        tierEvaluatedAt: Date | null;
    }) | null>;
    getRewards(customerId: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        code: string;
        description: string | null;
        isActive: boolean;
        validFrom: Date | null;
        validUntil: Date | null;
        category: string | null;
        pointsCost: number;
        stock: number | null;
        imageUrl: string | null;
    }[]>;
    redeemReward(customerId: string, data: {
        rewardCode: string;
        idempotencyKey: string;
    }): Promise<{
        error: string;
        status?: undefined;
        pointsSpent?: undefined;
        newBalance?: undefined;
    } | {
        status: string;
        error?: undefined;
        pointsSpent?: undefined;
        newBalance?: undefined;
    } | {
        status: string;
        pointsSpent: number;
        newBalance: number;
        error?: undefined;
    }>;
}
