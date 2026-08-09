import { PrismaService } from '../../shared/prisma/prisma.service';
export declare class TierService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    evaluateAllTiers(): Promise<void>;
    evaluateCustomerTier(customerId: string): Promise<{
        tierCode: string;
        netSpend: number;
        distinctMonths: number;
    }>;
    private calculateTierMetrics;
}
