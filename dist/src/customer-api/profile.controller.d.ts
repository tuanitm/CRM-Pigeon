import { PrismaService } from '../shared/prisma/prisma.service';
import { JourneyEngineService } from '../engines/journey/journey-engine.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';
export declare class ProfileController {
    private prisma;
    private journeyEngine;
    private journeyRunService;
    private readonly logger;
    constructor(prisma: PrismaService, journeyEngine: JourneyEngineService, journeyRunService: JourneyRunService);
    getProfile(id: string): Promise<({
        event: {
            id: string;
            source: string | null;
            customer_id: string | null;
            anonymous_id: string | null;
            event_type: string;
            properties: import("@prisma/client/runtime/client").JsonValue;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            idempotency_key: string | null;
            occurred_at: Date;
            received_at: Date;
        }[];
        journey_run: ({
            journey: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: string;
                name: string;
                version: number;
                description: string | null;
                code: string;
                graph: import("@prisma/client/runtime/client").JsonValue;
                triggerEvent: string | null;
                triggerSegmentId: string | null;
                entryConditions: import("@prisma/client/runtime/client").JsonValue | null;
                exitConditions: import("@prisma/client/runtime/client").JsonValue | null;
                hasControlGroup: boolean;
                controlGroupPct: import("@prisma/client-runtime-utils").Decimal | null;
            };
        } & {
            id: string;
            status: string;
            customer_id: string;
            journey_id: string;
            context: import("@prisma/client/runtime/client").JsonValue | null;
            current_node_id: string | null;
            entered_at: Date;
            exited_at: Date | null;
            exit_reason: string | null;
            journey_version: number;
        })[];
        babies: {
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
        }[];
        consents: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            status: string;
            channel: string;
            documentVersionId: string | null;
            grantedAt: Date | null;
            revokedAt: Date | null;
            ipAddress: string | null;
        }[];
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            label: string | null;
            addressLine1: string | null;
            addressLine2: string | null;
            ward: string | null;
            district: string | null;
            province: string | null;
            country: string;
            isDefault: boolean;
        }[];
        tags: {
            id: string;
            createdAt: Date;
            customerId: string;
            tag: string;
            source: string | null;
        }[];
        loyaltyAccount: ({
            tier: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                isDefault: boolean;
                tierCode: string;
                tierName: string;
                tierOrder: number;
                minNetSpend: import("@prisma/client-runtime-utils").Decimal;
                minDistinctMonths: number;
                pointsMultiplier: import("@prisma/client-runtime-utils").Decimal;
                benefits: import("@prisma/client/runtime/client").JsonValue | null;
            } | null;
            transactions: {
                id: string;
                createdAt: Date;
                customerId: string;
                source: string;
                loyaltyAccountId: string;
                type: string;
                points: number;
                balanceAfter: number;
                referenceType: string | null;
                referenceId: string | null;
                description: string | null;
                expiresAt: Date | null;
                idempotencyKey: string | null;
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
                orderId: string;
                quantity: number;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
                totalPrice: import("@prisma/client-runtime-utils").Decimal;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            status: string;
            channel: string | null;
            isGwp: boolean;
            wooOrderId: bigint | null;
            orderNumber: string | null;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            discountAmount: import("@prisma/client-runtime-utils").Decimal;
            netAmount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            isInternal: boolean;
            shipmentNo: string | null;
            trackingLink: string | null;
            orderedAt: Date;
        })[];
        reward_redemption: ({
            reward_catalog: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                category: string | null;
                description: string | null;
                validFrom: Date | null;
                validUntil: Date | null;
                code: string;
                pointsCost: number;
                stock: number | null;
                imageUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            status: string;
            shipmentNo: string | null;
            trackingLink: string | null;
            loyaltyAccountId: string;
            idempotencyKey: string | null;
            rewardId: string;
            pointsSpent: number;
            fulfilledAt: Date | null;
        })[];
        devices: {
            id: string;
            createdAt: Date;
            customerId: string;
            deviceType: string;
            browser: string;
            os: string;
            userAgent: string;
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
        pinCode: string | null;
    }) | null>;
    debugBabyJourney(id: string): Promise<{
        success: boolean;
    }>;
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
        pinCode: string | null;
    }>;
    updateRewardRedemptionStatus(id: string, redemptionId: string, data: {
        status: string;
        shipmentNo?: string;
        trackingLink?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        status: string;
        shipmentNo: string | null;
        trackingLink: string | null;
        loyaltyAccountId: string;
        idempotencyKey: string | null;
        rewardId: string;
        pointsSpent: number;
        fulfilledAt: Date | null;
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
        status: string;
        channel: string | null;
        isGwp: boolean;
        wooOrderId: bigint | null;
        orderNumber: string | null;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        discountAmount: import("@prisma/client-runtime-utils").Decimal;
        netAmount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        isInternal: boolean;
        shipmentNo: string | null;
        trackingLink: string | null;
        orderedAt: Date;
    }>;
}
