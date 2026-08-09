import { PrismaService } from '../shared/prisma/prisma.service';
export declare class DataQualityService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    evaluateCustomerQuality(customerId: string): Promise<void>;
    seedRules(): Promise<void>;
}
