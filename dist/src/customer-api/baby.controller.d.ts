import { PrismaService } from '../shared/prisma/prisma.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';
export declare class BabyController {
    private prisma;
    private journeyRunService;
    private readonly logger;
    constructor(prisma: PrismaService, journeyRunService: JourneyRunService);
    listBabies(customerId: string): Promise<({
        growthLogs: {
            id: string;
            notes: string | null;
            createdAt: Date;
            babyId: string;
            recordedAt: Date;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            heightCm: import("@prisma/client-runtime-utils").Decimal | null;
            headCircumferenceCm: import("@prisma/client-runtime-utils").Decimal | null;
        }[];
    } & {
        id: string;
        gender: string | null;
        dateOfBirth: Date | null;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        name: string | null;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    })[]>;
    createBaby(data: any): Promise<{
        id: string;
        gender: string | null;
        dateOfBirth: Date | null;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        name: string | null;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
    updateBaby(id: string, data: any): Promise<{
        id: string;
        gender: string | null;
        dateOfBirth: Date | null;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        name: string | null;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
    deleteBaby(id: string): Promise<{
        id: string;
        gender: string | null;
        dateOfBirth: Date | null;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        name: string | null;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
}
