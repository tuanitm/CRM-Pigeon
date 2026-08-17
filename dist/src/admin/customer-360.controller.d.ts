import { PrismaService } from '../shared/prisma/prisma.service';
import { NotificationService } from './notification.service';
export declare class CreateCustomerDto {
    fullName: string;
    phone: string;
    email?: string;
    gender?: string;
    dateOfBirth?: string;
    customerType?: string;
    address?: string;
    notes?: string;
    dmsCode?: string;
}
export declare class Customer360Controller {
    private prisma;
    private notifications;
    constructor(prisma: PrismaService, notifications: NotificationService);
    getMetrics(period?: string): Promise<{
        totalCustomers: number;
        newCustomers30d: number;
        activeCustomers: number;
        returningCustomers: number;
        completeProfilesPct: number;
        babyProfiles: number;
        averageCLV: number;
        churnRate: number;
        totalOrders: number;
        totalRevenue: number;
        totalTickets: number;
        openTickets: number;
        inactiveCustomers: number;
        customerTypeBreakdown: {
            endUser: number;
            outlet: number;
            keyshop: number;
        };
        tierCounts: {
            tier: string;
            count: number;
        }[];
        sourceCounts: {
            source: string;
            count: number;
        }[];
        recentCustomers: {
            id: string;
            createdAt: Date;
            customerType: string | null;
            phone: string | null;
            fullName: string | null;
        }[];
        recentOrders: ({
            customer: {
                fullName: string | null;
            };
        } & {
            id: string;
            customerId: string;
            wooOrderId: bigint | null;
            orderNumber: string | null;
            status: string;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            netAmount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            channel: string | null;
            isGwp: boolean;
            isInternal: boolean;
            shipmentNo: string | null;
            trackingLink: string | null;
            orderedAt: Date;
            createdAt: Date;
            updatedAt: Date;
        })[];
        recentTickets: ({
            customer: {
                fullName: string | null;
            };
        } & {
            id: string;
            customerId: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
            subject: string;
            category: string;
            messages: import("@prisma/client/runtime/client").JsonValue;
        })[];
        topCustomers: ({
            tier: {
                tierCode: string;
            } | null;
            customer: {
                id: string;
                customerType: string | null;
                phone: string | null;
                fullName: string | null;
            };
        } & {
            id: string;
            customerId: string;
            createdAt: Date;
            updatedAt: Date;
            tierId: string | null;
            pointsBalance: number;
            pointsLifetime: number;
            pointsRedeemed: number;
            pointsExpired: number;
            netSpend: import("@prisma/client-runtime-utils").Decimal;
            distinctOrderMonths: number;
            tierEvaluatedAt: Date | null;
        })[];
    }>;
    listCustomers(cursor?: string, take?: number, search?: string): Promise<{
        data: ({
            _count: {
                orders: number;
            };
            babies: {
                id: string;
                name: string | null;
                stageCode: string | null;
            }[];
            loyaltyAccount: {
                tierId: string | null;
                pointsBalance: number;
            } | null;
        } & {
            isActive: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerType: string | null;
            customerCode: string | null;
            phone: string | null;
            email: string | null;
            fullName: string | null;
            gender: string | null;
            dateOfBirth: Date | null;
            avatarUrl: string | null;
            registrationSource: string | null;
            dmsCode: string | null;
            notes: string | null;
            dataQualityFlag: string | null;
            isMerged: boolean;
            mergedIntoId: string | null;
        })[];
        nextCursor: string | null;
        hasMore: boolean;
    }>;
    createCustomer(dto: CreateCustomerDto): Promise<{
        loyaltyAccount: {
            id: string;
            customerId: string;
            createdAt: Date;
            updatedAt: Date;
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
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerType: string | null;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        dmsCode: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        mergedIntoId: string | null;
    }>;
    updateStatus(id: string, dto: {
        isActive: boolean;
    }): Promise<{
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerType: string | null;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        dmsCode: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        mergedIntoId: string | null;
    }>;
    getCustomerDetails(id: string): Promise<{
        babies: {
            id: string;
            customerId: string;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            gender: string | null;
            dateOfBirth: Date | null;
            dueDate: Date | null;
            isBorn: boolean;
            stageCode: string | null;
            feedingType: string | null;
        }[];
        consents: {
            id: string;
            customerId: string;
            status: string;
            channel: string;
            createdAt: Date;
            updatedAt: Date;
            documentVersionId: string | null;
            grantedAt: Date | null;
            revokedAt: Date | null;
            ipAddress: string | null;
        }[];
        addresses: {
            id: string;
            customerId: string;
            createdAt: Date;
            updatedAt: Date;
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
            customerId: string;
            createdAt: Date;
            source: string | null;
            tag: string;
        }[];
        event: {
            id: string;
            source: string | null;
            occurred_at: Date;
            customer_id: string | null;
            anonymous_id: string | null;
            event_type: string;
            properties: import("@prisma/client/runtime/client").JsonValue;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            idempotency_key: string | null;
            received_at: Date;
        }[];
        journey_run: ({
            journey: {
                id: string;
                status: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                code: string;
                description: string | null;
                graph: import("@prisma/client/runtime/client").JsonValue;
                triggerEvent: string | null;
                triggerSegmentId: string | null;
                entryConditions: import("@prisma/client/runtime/client").JsonValue | null;
                exitConditions: import("@prisma/client/runtime/client").JsonValue | null;
                version: number;
                hasControlGroup: boolean;
                controlGroupPct: import("@prisma/client-runtime-utils").Decimal | null;
            };
        } & {
            id: string;
            status: string;
            entered_at: Date;
            customer_id: string;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            journey_id: string;
            current_node_id: string | null;
            exited_at: Date | null;
            exit_reason: string | null;
            journey_version: number;
        })[];
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
            transactions: {
                id: string;
                customerId: string;
                createdAt: Date;
                source: string;
                description: string | null;
                loyaltyAccountId: string;
                type: string;
                points: number;
                balanceAfter: number;
                referenceType: string | null;
                referenceId: string | null;
                expiresAt: Date | null;
                idempotencyKey: string | null;
            }[];
        } & {
            id: string;
            customerId: string;
            createdAt: Date;
            updatedAt: Date;
            tierId: string | null;
            pointsBalance: number;
            pointsLifetime: number;
            pointsRedeemed: number;
            pointsExpired: number;
            netSpend: import("@prisma/client-runtime-utils").Decimal;
            distinctOrderMonths: number;
            tierEvaluatedAt: Date | null;
        }) | null;
        orders: ({
            items: ({
                product: {
                    isActive: boolean;
                    id: string;
                    isGwp: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    category: string | null;
                    sku: string;
                    wooProductId: bigint | null;
                    subcategory: string | null;
                    brand: string | null;
                    stageCodes: import("@prisma/client/runtime/client").JsonValue | null;
                    price: import("@prisma/client-runtime-utils").Decimal | null;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                orderId: string;
                productId: string | null;
                sku: string | null;
                quantity: number;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
                totalPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: string;
            customerId: string;
            wooOrderId: bigint | null;
            orderNumber: string | null;
            status: string;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            netAmount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            channel: string | null;
            isGwp: boolean;
            isInternal: boolean;
            shipmentNo: string | null;
            trackingLink: string | null;
            orderedAt: Date;
            createdAt: Date;
            updatedAt: Date;
        })[];
        reward_redemption: ({
            reward_catalog: {
                isActive: boolean;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                category: string | null;
                code: string;
                description: string | null;
                pointsCost: number;
                stock: number | null;
                imageUrl: string | null;
                validFrom: Date | null;
                validUntil: Date | null;
            };
        } & {
            id: string;
            customerId: string;
            status: string;
            shipmentNo: string | null;
            trackingLink: string | null;
            createdAt: Date;
            updatedAt: Date;
            loyaltyAccountId: string;
            idempotencyKey: string | null;
            rewardId: string;
            pointsSpent: number;
            fulfilledAt: Date | null;
        })[];
        devices: {
            id: string;
            customerId: string;
            createdAt: Date;
            lastLogin: Date;
            deviceType: string;
            browser: string;
            os: string;
            userAgent: string;
        }[];
    } & {
        isActive: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerType: string | null;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        dmsCode: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        mergedIntoId: string | null;
    }>;
}
