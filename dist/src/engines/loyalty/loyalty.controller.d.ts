import { PointsService } from './points.service';
import { TierService } from './tier.service';
import { PrismaService } from '../../shared/prisma/prisma.service';
declare class EarnPointsDto {
    source: string;
    points: number;
    referenceType?: string;
    referenceId?: string;
    description?: string;
}
declare class RedeemPointsDto {
    points: number;
    referenceType: string;
    referenceId: string;
    description: string;
}
export declare class LoyaltyController {
    private readonly pointsService;
    private readonly tierService;
    private readonly prisma;
    constructor(pointsService: PointsService, tierService: TierService, prisma: PrismaService);
    getAccount(customerId: string): Promise<({
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
    }) | {
        customerId: string;
        pointsBalance: number;
        pointsLifetime: number;
        tier: {
            tierCode: string;
        };
    }>;
    earnPoints(customerId: string, dto: EarnPointsDto): Promise<{
        success: boolean;
        newBalance?: number;
        error?: string;
    }>;
    redeemPoints(customerId: string, dto: RedeemPointsDto): Promise<{
        success: boolean;
        newBalance?: number;
        error?: string;
    }>;
    evaluateTier(customerId: string): Promise<{
        tierCode: string;
        netSpend: number;
        distinctMonths: number;
    }>;
}
export {};
