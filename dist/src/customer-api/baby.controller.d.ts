import { PrismaService } from '../shared/prisma/prisma.service';
export declare class BabyController {
    private prisma;
    constructor(prisma: PrismaService);
    listBabies(customerId: string): Promise<({
        growthLogs: {
            id: string;
            createdAt: Date;
            notes: string | null;
            recordedAt: Date;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            heightCm: import("@prisma/client-runtime-utils").Decimal | null;
            headCircumferenceCm: import("@prisma/client-runtime-utils").Decimal | null;
            babyId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        name: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        updatedAt: Date;
        customerId: string;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    })[]>;
    createBaby(data: any): Promise<{
        id: string;
        createdAt: Date;
        name: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        updatedAt: Date;
        customerId: string;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
    updateBaby(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        name: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        updatedAt: Date;
        customerId: string;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
    deleteBaby(id: string): Promise<{
        id: string;
        createdAt: Date;
        name: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        updatedAt: Date;
        customerId: string;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
}
