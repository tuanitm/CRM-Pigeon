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
            isDefault: boolean;
            tierCode: string;
            tierName: string;
            tierOrder: number;
            minNetSpend: import("@prisma/client-runtime-utils").Decimal;
            minDistinctMonths: number;
            pointsMultiplier: import("@prisma/client-runtime-utils").Decimal;
            benefits: import("@prisma/client/runtime/client").JsonValue | null;
        } | null;
        transactions: {
            id: string;
            createdAt: Date;
            customerId: string;
            source: string;
            loyaltyAccountId: string;
            type: string;
            points: number;
            balanceAfter: number;
            referenceType: string | null;
            referenceId: string | null;
            description: string | null;
            expiresAt: Date | null;
            idempotencyKey: string | null;
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
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        category: string | null;
        description: string | null;
        validFrom: Date | null;
        validUntil: Date | null;
        code: string;
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
