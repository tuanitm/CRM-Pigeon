import { PrismaService } from '../shared/prisma/prisma.service';
export declare class CreateCustomerDto {
    fullName: string;
    phone: string;
    email?: string;
    gender?: string;
    dateOfBirth?: string;
    customerType?: string;
    address?: string;
    notes?: string;
}
export declare class Customer360Controller {
    private prisma;
    constructor(prisma: PrismaService);
    getMetrics(): Promise<{
        totalCustomers: number;
        newCustomers30d: number;
        activeCustomers: number;
        returningCustomers: number;
        completeProfilesPct: number;
        babyProfiles: number;
        averageCLV: number;
        churnRate: number;
    }>;
    listCustomers(cursor?: string, take?: number, search?: string): Promise<{
        data: ({
            loyaltyAccount: {
                tierId: string | null;
                pointsBalance: number;
            } | null;
            babies: {
                id: string;
                name: string | null;
                stageCode: string | null;
            }[];
            _count: {
                orders: number;
            };
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
        })[];
        nextCursor: string | null;
        hasMore: boolean;
    }>;
    createCustomer(dto: CreateCustomerDto): Promise<{
        loyaltyAccount: {
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
        } | null;
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
    }>;
}
