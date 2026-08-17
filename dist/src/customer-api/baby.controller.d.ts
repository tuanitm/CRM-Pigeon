import { PrismaService } from '../shared/prisma/prisma.service';
export declare class BabyController {
    private prisma;
    constructor(prisma: PrismaService);
    listBabies(customerId: string): Promise<({
        growthLogs: {
            id: string;
            notes: string | null;
            createdAt: Date;
            recordedAt: Date;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            heightCm: import("@prisma/client-runtime-utils").Decimal | null;
            headCircumferenceCm: import("@prisma/client-runtime-utils").Decimal | null;
            babyId: string;
        }[];
    } & {
        id: string;
        gender: string | null;
        dateOfBirth: Date | null;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        customerId: string;
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
        name: string | null;
        customerId: string;
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
        name: string | null;
        customerId: string;
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
        name: string | null;
        customerId: string;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
    }>;
}
