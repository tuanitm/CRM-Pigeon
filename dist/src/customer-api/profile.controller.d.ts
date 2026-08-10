import { PrismaService } from '../shared/prisma/prisma.service';
export declare class ProfileController {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(id: string): Promise<({
        loyaltyAccount: ({
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
        }) | null;
        babies: {
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
        }[];
        consents: {
            id: string;
            ipAddress: string | null;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            channel: string;
            status: string;
            documentVersionId: string | null;
            grantedAt: Date | null;
            revokedAt: Date | null;
        }[];
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            isDefault: boolean;
            label: string | null;
            addressLine1: string | null;
            addressLine2: string | null;
            ward: string | null;
            district: string | null;
            province: string | null;
            country: string;
        }[];
        tags: {
            id: string;
            createdAt: Date;
            customerId: string;
            source: string | null;
            tag: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        customerType: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        mergedIntoId: string | null;
        updatedAt: Date;
    }) | null>;
    updateProfile(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        customerType: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        mergedIntoId: string | null;
        updatedAt: Date;
    }>;
}
