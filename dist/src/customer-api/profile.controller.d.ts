import { PrismaService } from '../shared/prisma/prisma.service';
export declare class ProfileController {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(id: string): Promise<({
        babies: {
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
        }[];
        consents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ipAddress: string | null;
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
        event: {
            id: string;
            customer_id: string | null;
            properties: import("@prisma/client/runtime/client").JsonValue;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            source: string | null;
            event_type: string;
            anonymous_id: string | null;
            occurred_at: Date;
            idempotency_key: string | null;
            received_at: Date;
        }[];
        journey_run: ({
            journey: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                code: string;
                description: string | null;
                status: string;
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
            customer_id: string;
            entered_at: Date;
            exited_at: Date | null;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            status: string;
            journey_id: string;
            current_node_id: string | null;
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
                createdAt: Date;
                type: string;
                description: string | null;
                customerId: string;
                idempotencyKey: string | null;
                source: string;
                points: number;
                referenceType: string | null;
                referenceId: string | null;
                balanceAfter: number;
                expiresAt: Date | null;
                loyaltyAccountId: string;
            }[];
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
        orders: ({
            items: ({
                product: {
                    id: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sku: string;
                    wooProductId: bigint | null;
                    category: string | null;
                    subcategory: string | null;
                    brand: string | null;
                    stageCodes: import("@prisma/client/runtime/client").JsonValue | null;
                    price: import("@prisma/client-runtime-utils").Decimal | null;
                    isGwp: boolean;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                sku: string | null;
                productId: string | null;
                quantity: number;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
                totalPrice: import("@prisma/client-runtime-utils").Decimal;
                orderId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            channel: string | null;
            status: string;
            isGwp: boolean;
            isInternal: boolean;
            shipmentNo: string | null;
            trackingLink: string | null;
            wooOrderId: bigint | null;
            orderNumber: string | null;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            netAmount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            orderedAt: Date;
        })[];
        reward_redemption: ({
            reward_catalog: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                code: string;
                description: string | null;
                validFrom: Date | null;
                validUntil: Date | null;
                category: string | null;
                pointsCost: number;
                stock: number | null;
                imageUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            idempotencyKey: string | null;
            status: string;
            loyaltyAccountId: string;
            pointsSpent: number;
            shipmentNo: string | null;
            trackingLink: string | null;
            fulfilledAt: Date | null;
            rewardId: string;
        })[];
        devices: {
            id: string;
            createdAt: Date;
            customerId: string;
            userAgent: string;
            deviceType: string;
            browser: string;
            os: string;
            lastLogin: Date;
        }[];
    } & {
        id: string;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        customerType: string | null;
        dmsCode: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        isActive: boolean;
        mergedIntoId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    updateProfile(id: string, data: any): Promise<{
        id: string;
        customerCode: string | null;
        phone: string | null;
        email: string | null;
        fullName: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        avatarUrl: string | null;
        registrationSource: string | null;
        customerType: string | null;
        dmsCode: string | null;
        notes: string | null;
        dataQualityFlag: string | null;
        isMerged: boolean;
        isActive: boolean;
        mergedIntoId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private evaluateWelcomeBonus;
    updateRewardRedemptionStatus(id: string, redemptionId: string, data: {
        status: string;
        shipmentNo?: string;
        trackingLink?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        idempotencyKey: string | null;
        status: string;
        loyaltyAccountId: string;
        pointsSpent: number;
        shipmentNo: string | null;
        trackingLink: string | null;
        fulfilledAt: Date | null;
        rewardId: string;
    }>;
    updateOrderStatus(id: string, orderId: string, data: {
        status: string;
        shipmentNo?: string;
        trackingLink?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        channel: string | null;
        status: string;
        isGwp: boolean;
        isInternal: boolean;
        shipmentNo: string | null;
        trackingLink: string | null;
        wooOrderId: bigint | null;
        orderNumber: string | null;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        netAmount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        orderedAt: Date;
    }>;
}
