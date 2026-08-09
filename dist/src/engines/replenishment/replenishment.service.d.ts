import { PrismaService } from '../../shared/prisma/prisma.service';
export declare class ReplenishmentService {
    private prisma;
    private readonly logger;
    private readonly TRIGGER_PERCENTAGE;
    private readonly EWMA_ALPHA;
    constructor(prisma: PrismaService);
    checkDueReplenishments(): Promise<void>;
    onProductPurchased(customerId: string, productId: string, orderedAt: Date): Promise<void>;
    private calculatePersonalCycle;
    private getProductLifecycleRule;
    private getGlobalAverageCycle;
}
