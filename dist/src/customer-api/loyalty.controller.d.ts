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
            type: string;
            source: string;
            description: string | null;
            customerId: string;
            idempotencyKey: string | null;
            points: number;
            balanceAfter: number;
            referenceType: string | null;
            referenceId: string | null;
            expiresAt: Date | null;
            loyaltyAccountId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        pointsBalance: number;
        customerId: string;
        tierId: string | null;
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
        code: string;
        description: string | null;
        validFrom: Date | null;
        validUntil: Date | null;
        category: string | null;
        price: import("@prisma/client-runtime-utils").Decimal | null;
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
