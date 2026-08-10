import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerIdentity(): Prisma.CustomerIdentityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mergeCandidate(): Prisma.MergeCandidateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerAddress(): Prisma.CustomerAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerTag(): Prisma.CustomerTagDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get baby(): Prisma.BabyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get babyGrowthLog(): Prisma.BabyGrowthLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get babyStageHistory(): Prisma.BabyStageHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get consentDocumentVersion(): Prisma.ConsentDocumentVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get consent(): Prisma.ConsentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productLifecycleRule(): Prisma.ProductLifecycleRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productExchange(): Prisma.ProductExchangeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get review(): Prisma.ReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get loyaltyTierConfig(): Prisma.LoyaltyTierConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get loyaltyAccount(): Prisma.LoyaltyAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get loyaltyTransaction(): Prisma.LoyaltyTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get loyaltyEarnRule(): Prisma.LoyaltyEarnRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rewardCatalog(): Prisma.RewardCatalogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rewardRedemption(): Prisma.RewardRedemptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get segment(): Prisma.SegmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journey(): Prisma.JourneyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get messageTemplate(): Prisma.MessageTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminUser(): Prisma.AdminUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get campaign_control_group(): Prisma.campaign_control_groupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get checklist_definition(): Prisma.checklist_definitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get checklist_progress(): Prisma.checklist_progressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customer_metrics_daily(): Prisma.customer_metrics_dailyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get data_layer_definition(): Prisma.data_layer_definitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get data_quality_flag_log(): Prisma.data_quality_flag_logDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get data_quality_rule(): Prisma.data_quality_ruleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dsr_request(): Prisma.dsr_requestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get event(): Prisma.eventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expert_booking(): Prisma.expert_bookingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expert_slot(): Prisma.expert_slotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get expert_topic(): Prisma.expert_topicDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get frequency_counter(): Prisma.frequency_counterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get integration_job(): Prisma.integration_jobDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journey_run(): Prisma.journey_runDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journey_step_log(): Prisma.journey_step_logDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get kpi_daily_snapshot(): Prisma.kpi_daily_snapshotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get message_log(): Prisma.message_logDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get milestone_definition(): Prisma.milestone_definitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get milestone_progress(): Prisma.milestone_progressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get points_liability_snapshot(): Prisma.points_liability_snapshotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_purchase_cycle(): Prisma.product_purchase_cycleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product_serial(): Prisma.product_serialDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quiz_definition(): Prisma.quiz_definitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quiz_response(): Prisma.quiz_responseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get referral_code(): Prisma.referral_codeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get referral_conversion(): Prisma.referral_conversionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get replenishment_schedule(): Prisma.replenishment_scheduleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rfm_snapshot(): Prisma.rfm_snapshotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get segment_membership(): Prisma.segment_membershipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get serial_batch(): Prisma.serial_batchDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get serial_scan(): Prisma.serial_scanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get session(): Prisma.sessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription(): Prisma.subscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription_delivery(): Prisma.subscription_deliveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription_item(): Prisma.subscription_itemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get warranty_registration(): Prisma.warranty_registrationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get webhook_inbox(): Prisma.webhook_inboxDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataHub(): Prisma.DataHubDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dynamicAction(): Prisma.DynamicActionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dynamicActionPage(): Prisma.DynamicActionPageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dynamicActionComponent(): Prisma.DynamicActionComponentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataHubTable(): Prisma.DataHubTableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataHubColumn(): Prisma.DataHubColumnDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get dataHubRecord(): Prisma.DataHubRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zaloOA(): Prisma.ZaloOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get zaloMiniApp(): Prisma.ZaloMiniAppDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
