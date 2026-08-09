import { PrismaService } from '../shared/prisma/prisma.service';
import { PointsService } from '../engines/loyalty/points.service';
export declare class SerialController {
    private prisma;
    private pointsService;
    constructor(prisma: PrismaService, pointsService: PointsService);
    verifySerial(data: {
        serialCode: string;
        ipAddress?: string;
    }): Promise<{
        valid: boolean;
        message: string;
        scanResult?: undefined;
        product?: undefined;
        canClaim?: undefined;
    } | {
        valid: boolean;
        scanResult: string;
        product: {
            name: any;
            category: any;
        };
        canClaim: boolean;
        message?: undefined;
    }>;
    claimSerial(data: {
        serialCode: string;
        customerId: string;
    }): Promise<{
        status: string;
        message: string;
        newBalance: number | undefined;
    } | {
        status: string;
        message: string | undefined;
        newBalance?: undefined;
    }>;
}
