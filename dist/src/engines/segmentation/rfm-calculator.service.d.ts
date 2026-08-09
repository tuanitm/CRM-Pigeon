import { PrismaService } from '../../shared/prisma/prisma.service';
export declare class RfmCalculatorService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    calculateRfm(): Promise<void>;
    private computeRawScores;
    private isDiscountHunter;
    private mapToSegment;
    private quintileBoundaries;
    private assignQuintile;
    private getCurrentPeriod;
    private getWeekNumber;
}
