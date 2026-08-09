import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private _client;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    get customer(): import("../../../generated/prisma/models").CustomerDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get customerIdentity(): import("../../../generated/prisma/models").CustomerIdentityDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get mergeCandidate(): import("../../../generated/prisma/models").MergeCandidateDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get customerAddress(): import("../../../generated/prisma/models").CustomerAddressDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get customerTag(): import("../../../generated/prisma/models").CustomerTagDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get baby(): import("../../../generated/prisma/models").BabyDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get babyGrowthLog(): import("../../../generated/prisma/models").BabyGrowthLogDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get babyStageHistory(): import("../../../generated/prisma/models").BabyStageHistoryDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get consent(): import("../../../generated/prisma/models").ConsentDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get consentDocumentVersion(): import("../../../generated/prisma/models").ConsentDocumentVersionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get product(): import("../../../generated/prisma/models").ProductDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get productLifecycleRule(): import("../../../generated/prisma/models").ProductLifecycleRuleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get order(): import("../../../generated/prisma/models").OrderDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get orderItem(): import("../../../generated/prisma/models").OrderItemDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get productExchange(): import("../../../generated/prisma/models").ProductExchangeDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get review(): import("../../../generated/prisma/models").ReviewDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get loyaltyTierConfig(): import("../../../generated/prisma/models").LoyaltyTierConfigDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get loyaltyAccount(): import("../../../generated/prisma/models").LoyaltyAccountDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get loyaltyTransaction(): import("../../../generated/prisma/models").LoyaltyTransactionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get loyaltyEarnRule(): import("../../../generated/prisma/models").LoyaltyEarnRuleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get rewardCatalog(): import("../../../generated/prisma/models").RewardCatalogDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get rewardRedemption(): import("../../../generated/prisma/models").RewardRedemptionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get segment(): import("../../../generated/prisma/models").SegmentDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get journey(): import("../../../generated/prisma/models").JourneyDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get messageTemplate(): import("../../../generated/prisma/models").MessageTemplateDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get role(): import("../../../generated/prisma/models").RoleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get adminUser(): import("../../../generated/prisma/models").AdminUserDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get auditLog(): import("../../../generated/prisma/models").AuditLogDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get systemConfig(): import("../../../generated/prisma/models").SystemConfigDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get campaign_control_group(): import("../../../generated/prisma/models").campaign_control_groupDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get checklist_definition(): import("../../../generated/prisma/models").checklist_definitionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get checklist_progress(): import("../../../generated/prisma/models").checklist_progressDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get customer_metrics_daily(): import("../../../generated/prisma/models").customer_metrics_dailyDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get data_layer_definition(): import("../../../generated/prisma/models").data_layer_definitionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get data_quality_flag_log(): import("../../../generated/prisma/models").data_quality_flag_logDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get data_quality_rule(): import("../../../generated/prisma/models").data_quality_ruleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get dsr_request(): import("../../../generated/prisma/models").dsr_requestDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get event(): import("../../../generated/prisma/models").eventDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get expert_booking(): import("../../../generated/prisma/models").expert_bookingDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get expert_slot(): import("../../../generated/prisma/models").expert_slotDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get expert_topic(): import("../../../generated/prisma/models").expert_topicDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get frequency_counter(): import("../../../generated/prisma/models").frequency_counterDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get integration_job(): import("../../../generated/prisma/models").integration_jobDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get journey_run(): import("../../../generated/prisma/models").journey_runDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get journey_step_log(): import("../../../generated/prisma/models").journey_step_logDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get kpi_daily_snapshot(): import("../../../generated/prisma/models").kpi_daily_snapshotDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get message_log(): import("../../../generated/prisma/models").message_logDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get milestone_definition(): import("../../../generated/prisma/models").milestone_definitionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get milestone_progress(): import("../../../generated/prisma/models").milestone_progressDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get points_liability_snapshot(): import("../../../generated/prisma/models").points_liability_snapshotDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get product_purchase_cycle(): import("../../../generated/prisma/models").product_purchase_cycleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get product_serial(): import("../../../generated/prisma/models").product_serialDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get quiz_definition(): import("../../../generated/prisma/models").quiz_definitionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get quiz_response(): import("../../../generated/prisma/models").quiz_responseDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get referral_code(): import("../../../generated/prisma/models").referral_codeDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get referral_conversion(): import("../../../generated/prisma/models").referral_conversionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get replenishment_schedule(): import("../../../generated/prisma/models").replenishment_scheduleDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get rfm_snapshot(): import("../../../generated/prisma/models").rfm_snapshotDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get segment_membership(): import("../../../generated/prisma/models").segment_membershipDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get serial_batch(): import("../../../generated/prisma/models").serial_batchDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get serial_scan(): import("../../../generated/prisma/models").serial_scanDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get session(): import("../../../generated/prisma/models").sessionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get subscription(): import("../../../generated/prisma/models").subscriptionDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get subscription_delivery(): import("../../../generated/prisma/models").subscription_deliveryDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get subscription_item(): import("../../../generated/prisma/models").subscription_itemDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get warranty_registration(): import("../../../generated/prisma/models").warranty_registrationDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get webhook_inbox(): import("../../../generated/prisma/models").webhook_inboxDelegate<import("@prisma/client/runtime/client").InternalArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    get $executeRaw(): <T = unknown>(query: TemplateStringsArray | import("../../../generated/prisma/internal/prismaNamespace").Sql, ...values: any[]) => import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
    get $queryRaw(): <T = unknown>(query: TemplateStringsArray | import("../../../generated/prisma/internal/prismaNamespace").Sql, ...values: any[]) => import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<T>;
    get $transaction(): {
        <P extends import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<any>[]>(arg: [...P], options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: import("../../../generated/prisma/internal/prismaNamespace").TransactionIsolationLevel;
        }): import("@prisma/client/runtime/client").JsPromise<import("@prisma/client/runtime/client").UnwrapTuple<P>>;
        <R>(fn: (prisma: Omit<import("../../../generated/prisma/internal/class").PrismaClient, import("@prisma/client/runtime/client").ITXClientDenyList>) => import("@prisma/client/runtime/client").JsPromise<R>, options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: import("../../../generated/prisma/internal/prismaNamespace").TransactionIsolationLevel;
        }): import("@prisma/client/runtime/client").JsPromise<R>;
    };
}
