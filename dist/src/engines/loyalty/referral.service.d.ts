import { PrismaService } from '../../shared/prisma/prisma.service';
import { PointsService } from './points.service';
export declare class ReferralService {
    private prisma;
    private pointsService;
    private readonly logger;
    constructor(prisma: PrismaService, pointsService: PointsService);
    generateCode(customerId: string): Promise<string>;
    processReferral(referralCode: string, referredCustomerId: string): Promise<{
        success: boolean;
        error?: string;
    }>;
}
