import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Customer: "Customer";
    readonly CustomerIdentity: "CustomerIdentity";
    readonly MergeCandidate: "MergeCandidate";
    readonly CustomerAddress: "CustomerAddress";
    readonly CustomerTag: "CustomerTag";
    readonly Baby: "Baby";
    readonly BabyGrowthLog: "BabyGrowthLog";
    readonly BabyStageHistory: "BabyStageHistory";
    readonly ConsentDocumentVersion: "ConsentDocumentVersion";
    readonly Consent: "Consent";
    readonly Product: "Product";
    readonly ProductLifecycleRule: "ProductLifecycleRule";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly ProductExchange: "ProductExchange";
    readonly Review: "Review";
    readonly LoyaltyTierConfig: "LoyaltyTierConfig";
    readonly LoyaltyAccount: "LoyaltyAccount";
    readonly LoyaltyTransaction: "LoyaltyTransaction";
    readonly LoyaltyEarnRule: "LoyaltyEarnRule";
    readonly RewardCatalog: "RewardCatalog";
    readonly RewardRedemption: "RewardRedemption";
    readonly Segment: "Segment";
    readonly Journey: "Journey";
    readonly MessageTemplate: "MessageTemplate";
    readonly Role: "Role";
    readonly AdminUser: "AdminUser";
    readonly AuditLog: "AuditLog";
    readonly campaign_control_group: "campaign_control_group";
    readonly checklist_definition: "checklist_definition";
    readonly checklist_progress: "checklist_progress";
    readonly customer_metrics_daily: "customer_metrics_daily";
    readonly data_layer_definition: "data_layer_definition";
    readonly data_quality_flag_log: "data_quality_flag_log";
    readonly data_quality_rule: "data_quality_rule";
    readonly dsr_request: "dsr_request";
    readonly event: "event";
    readonly expert_booking: "expert_booking";
    readonly expert_slot: "expert_slot";
    readonly expert_topic: "expert_topic";
    readonly frequency_counter: "frequency_counter";
    readonly integration_job: "integration_job";
    readonly journey_run: "journey_run";
    readonly journey_step_log: "journey_step_log";
    readonly kpi_daily_snapshot: "kpi_daily_snapshot";
    readonly message_log: "message_log";
    readonly milestone_definition: "milestone_definition";
    readonly milestone_progress: "milestone_progress";
    readonly points_liability_snapshot: "points_liability_snapshot";
    readonly product_purchase_cycle: "product_purchase_cycle";
    readonly product_serial: "product_serial";
    readonly quiz_definition: "quiz_definition";
    readonly quiz_response: "quiz_response";
    readonly referral_code: "referral_code";
    readonly referral_conversion: "referral_conversion";
    readonly replenishment_schedule: "replenishment_schedule";
    readonly rfm_snapshot: "rfm_snapshot";
    readonly segment_membership: "segment_membership";
    readonly serial_batch: "serial_batch";
    readonly serial_scan: "serial_scan";
    readonly session: "session";
    readonly subscription: "subscription";
    readonly subscription_delivery: "subscription_delivery";
    readonly subscription_item: "subscription_item";
    readonly warranty_registration: "warranty_registration";
    readonly webhook_inbox: "webhook_inbox";
    readonly SystemConfig: "SystemConfig";
    readonly DataHub: "DataHub";
    readonly DynamicAction: "DynamicAction";
    readonly DynamicActionPage: "DynamicActionPage";
    readonly DynamicActionComponent: "DynamicActionComponent";
    readonly DataHubTable: "DataHubTable";
    readonly DataHubColumn: "DataHubColumn";
    readonly DataHubRecord: "DataHubRecord";
    readonly ZaloOA: "ZaloOA";
    readonly ZaloMiniApp: "ZaloMiniApp";
    readonly SupportTicket: "SupportTicket";
    readonly CustomerDevice: "CustomerDevice";
    readonly AdminNotification: "AdminNotification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "customer" | "customerIdentity" | "mergeCandidate" | "customerAddress" | "customerTag" | "baby" | "babyGrowthLog" | "babyStageHistory" | "consentDocumentVersion" | "consent" | "product" | "productLifecycleRule" | "order" | "orderItem" | "productExchange" | "review" | "loyaltyTierConfig" | "loyaltyAccount" | "loyaltyTransaction" | "loyaltyEarnRule" | "rewardCatalog" | "rewardRedemption" | "segment" | "journey" | "messageTemplate" | "role" | "adminUser" | "auditLog" | "campaign_control_group" | "checklist_definition" | "checklist_progress" | "customer_metrics_daily" | "data_layer_definition" | "data_quality_flag_log" | "data_quality_rule" | "dsr_request" | "event" | "expert_booking" | "expert_slot" | "expert_topic" | "frequency_counter" | "integration_job" | "journey_run" | "journey_step_log" | "kpi_daily_snapshot" | "message_log" | "milestone_definition" | "milestone_progress" | "points_liability_snapshot" | "product_purchase_cycle" | "product_serial" | "quiz_definition" | "quiz_response" | "referral_code" | "referral_conversion" | "replenishment_schedule" | "rfm_snapshot" | "segment_membership" | "serial_batch" | "serial_scan" | "session" | "subscription" | "subscription_delivery" | "subscription_item" | "warranty_registration" | "webhook_inbox" | "systemConfig" | "dataHub" | "dynamicAction" | "dynamicActionPage" | "dynamicActionComponent" | "dataHubTable" | "dataHubColumn" | "dataHubRecord" | "zaloOA" | "zaloMiniApp" | "supportTicket" | "customerDevice" | "adminNotification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        CustomerIdentity: {
            payload: Prisma.$CustomerIdentityPayload<ExtArgs>;
            fields: Prisma.CustomerIdentityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerIdentityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerIdentityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerIdentityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerIdentityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                findMany: {
                    args: Prisma.CustomerIdentityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                create: {
                    args: Prisma.CustomerIdentityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                createMany: {
                    args: Prisma.CustomerIdentityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerIdentityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                delete: {
                    args: Prisma.CustomerIdentityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                update: {
                    args: Prisma.CustomerIdentityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerIdentityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerIdentityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerIdentityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerIdentityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerIdentityPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerIdentityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerIdentity>;
                };
                groupBy: {
                    args: Prisma.CustomerIdentityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerIdentityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerIdentityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerIdentityCountAggregateOutputType> | number;
                };
            };
        };
        MergeCandidate: {
            payload: Prisma.$MergeCandidatePayload<ExtArgs>;
            fields: Prisma.MergeCandidateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MergeCandidateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MergeCandidateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                findFirst: {
                    args: Prisma.MergeCandidateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MergeCandidateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                findMany: {
                    args: Prisma.MergeCandidateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>[];
                };
                create: {
                    args: Prisma.MergeCandidateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                createMany: {
                    args: Prisma.MergeCandidateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MergeCandidateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>[];
                };
                delete: {
                    args: Prisma.MergeCandidateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                update: {
                    args: Prisma.MergeCandidateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                deleteMany: {
                    args: Prisma.MergeCandidateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MergeCandidateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MergeCandidateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>[];
                };
                upsert: {
                    args: Prisma.MergeCandidateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MergeCandidatePayload>;
                };
                aggregate: {
                    args: Prisma.MergeCandidateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMergeCandidate>;
                };
                groupBy: {
                    args: Prisma.MergeCandidateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MergeCandidateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MergeCandidateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MergeCandidateCountAggregateOutputType> | number;
                };
            };
        };
        CustomerAddress: {
            payload: Prisma.$CustomerAddressPayload<ExtArgs>;
            fields: Prisma.CustomerAddressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerAddressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerAddressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerAddressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerAddressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                findMany: {
                    args: Prisma.CustomerAddressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                create: {
                    args: Prisma.CustomerAddressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                createMany: {
                    args: Prisma.CustomerAddressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerAddressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                delete: {
                    args: Prisma.CustomerAddressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                update: {
                    args: Prisma.CustomerAddressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerAddressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerAddressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerAddressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerAddressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerAddress>;
                };
                groupBy: {
                    args: Prisma.CustomerAddressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerAddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerAddressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerAddressCountAggregateOutputType> | number;
                };
            };
        };
        CustomerTag: {
            payload: Prisma.$CustomerTagPayload<ExtArgs>;
            fields: Prisma.CustomerTagFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerTagFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerTagFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerTagFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerTagFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                findMany: {
                    args: Prisma.CustomerTagFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>[];
                };
                create: {
                    args: Prisma.CustomerTagCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                createMany: {
                    args: Prisma.CustomerTagCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerTagCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>[];
                };
                delete: {
                    args: Prisma.CustomerTagDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                update: {
                    args: Prisma.CustomerTagUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerTagDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerTagUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerTagUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerTagUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerTagPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerTagAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerTag>;
                };
                groupBy: {
                    args: Prisma.CustomerTagGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerTagGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerTagCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerTagCountAggregateOutputType> | number;
                };
            };
        };
        Baby: {
            payload: Prisma.$BabyPayload<ExtArgs>;
            fields: Prisma.BabyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BabyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BabyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                findFirst: {
                    args: Prisma.BabyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BabyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                findMany: {
                    args: Prisma.BabyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>[];
                };
                create: {
                    args: Prisma.BabyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                createMany: {
                    args: Prisma.BabyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BabyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>[];
                };
                delete: {
                    args: Prisma.BabyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                update: {
                    args: Prisma.BabyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                deleteMany: {
                    args: Prisma.BabyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BabyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BabyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>[];
                };
                upsert: {
                    args: Prisma.BabyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyPayload>;
                };
                aggregate: {
                    args: Prisma.BabyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBaby>;
                };
                groupBy: {
                    args: Prisma.BabyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BabyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyCountAggregateOutputType> | number;
                };
            };
        };
        BabyGrowthLog: {
            payload: Prisma.$BabyGrowthLogPayload<ExtArgs>;
            fields: Prisma.BabyGrowthLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BabyGrowthLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BabyGrowthLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                findFirst: {
                    args: Prisma.BabyGrowthLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BabyGrowthLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                findMany: {
                    args: Prisma.BabyGrowthLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>[];
                };
                create: {
                    args: Prisma.BabyGrowthLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                createMany: {
                    args: Prisma.BabyGrowthLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BabyGrowthLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>[];
                };
                delete: {
                    args: Prisma.BabyGrowthLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                update: {
                    args: Prisma.BabyGrowthLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                deleteMany: {
                    args: Prisma.BabyGrowthLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BabyGrowthLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BabyGrowthLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>[];
                };
                upsert: {
                    args: Prisma.BabyGrowthLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyGrowthLogPayload>;
                };
                aggregate: {
                    args: Prisma.BabyGrowthLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBabyGrowthLog>;
                };
                groupBy: {
                    args: Prisma.BabyGrowthLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyGrowthLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BabyGrowthLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyGrowthLogCountAggregateOutputType> | number;
                };
            };
        };
        BabyStageHistory: {
            payload: Prisma.$BabyStageHistoryPayload<ExtArgs>;
            fields: Prisma.BabyStageHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BabyStageHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BabyStageHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.BabyStageHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BabyStageHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                findMany: {
                    args: Prisma.BabyStageHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>[];
                };
                create: {
                    args: Prisma.BabyStageHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                createMany: {
                    args: Prisma.BabyStageHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BabyStageHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>[];
                };
                delete: {
                    args: Prisma.BabyStageHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                update: {
                    args: Prisma.BabyStageHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.BabyStageHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BabyStageHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BabyStageHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.BabyStageHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BabyStageHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.BabyStageHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBabyStageHistory>;
                };
                groupBy: {
                    args: Prisma.BabyStageHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyStageHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BabyStageHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BabyStageHistoryCountAggregateOutputType> | number;
                };
            };
        };
        ConsentDocumentVersion: {
            payload: Prisma.$ConsentDocumentVersionPayload<ExtArgs>;
            fields: Prisma.ConsentDocumentVersionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsentDocumentVersionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsentDocumentVersionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                findFirst: {
                    args: Prisma.ConsentDocumentVersionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsentDocumentVersionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                findMany: {
                    args: Prisma.ConsentDocumentVersionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>[];
                };
                create: {
                    args: Prisma.ConsentDocumentVersionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                createMany: {
                    args: Prisma.ConsentDocumentVersionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConsentDocumentVersionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>[];
                };
                delete: {
                    args: Prisma.ConsentDocumentVersionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                update: {
                    args: Prisma.ConsentDocumentVersionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsentDocumentVersionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsentDocumentVersionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConsentDocumentVersionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>[];
                };
                upsert: {
                    args: Prisma.ConsentDocumentVersionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentDocumentVersionPayload>;
                };
                aggregate: {
                    args: Prisma.ConsentDocumentVersionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsentDocumentVersion>;
                };
                groupBy: {
                    args: Prisma.ConsentDocumentVersionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsentDocumentVersionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsentDocumentVersionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsentDocumentVersionCountAggregateOutputType> | number;
                };
            };
        };
        Consent: {
            payload: Prisma.$ConsentPayload<ExtArgs>;
            fields: Prisma.ConsentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                findFirst: {
                    args: Prisma.ConsentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                findMany: {
                    args: Prisma.ConsentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>[];
                };
                create: {
                    args: Prisma.ConsentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                createMany: {
                    args: Prisma.ConsentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConsentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>[];
                };
                delete: {
                    args: Prisma.ConsentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                update: {
                    args: Prisma.ConsentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConsentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>[];
                };
                upsert: {
                    args: Prisma.ConsentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsentPayload>;
                };
                aggregate: {
                    args: Prisma.ConsentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsent>;
                };
                groupBy: {
                    args: Prisma.ConsentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsentCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductLifecycleRule: {
            payload: Prisma.$ProductLifecycleRulePayload<ExtArgs>;
            fields: Prisma.ProductLifecycleRuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductLifecycleRuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductLifecycleRuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                findFirst: {
                    args: Prisma.ProductLifecycleRuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductLifecycleRuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                findMany: {
                    args: Prisma.ProductLifecycleRuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>[];
                };
                create: {
                    args: Prisma.ProductLifecycleRuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                createMany: {
                    args: Prisma.ProductLifecycleRuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductLifecycleRuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>[];
                };
                delete: {
                    args: Prisma.ProductLifecycleRuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                update: {
                    args: Prisma.ProductLifecycleRuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductLifecycleRuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductLifecycleRuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductLifecycleRuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>[];
                };
                upsert: {
                    args: Prisma.ProductLifecycleRuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLifecycleRulePayload>;
                };
                aggregate: {
                    args: Prisma.ProductLifecycleRuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductLifecycleRule>;
                };
                groupBy: {
                    args: Prisma.ProductLifecycleRuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductLifecycleRuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductLifecycleRuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductLifecycleRuleCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        ProductExchange: {
            payload: Prisma.$ProductExchangePayload<ExtArgs>;
            fields: Prisma.ProductExchangeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductExchangeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductExchangeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                findFirst: {
                    args: Prisma.ProductExchangeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductExchangeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                findMany: {
                    args: Prisma.ProductExchangeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>[];
                };
                create: {
                    args: Prisma.ProductExchangeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                createMany: {
                    args: Prisma.ProductExchangeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductExchangeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>[];
                };
                delete: {
                    args: Prisma.ProductExchangeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                update: {
                    args: Prisma.ProductExchangeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductExchangeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductExchangeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductExchangeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>[];
                };
                upsert: {
                    args: Prisma.ProductExchangeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductExchangePayload>;
                };
                aggregate: {
                    args: Prisma.ProductExchangeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductExchange>;
                };
                groupBy: {
                    args: Prisma.ProductExchangeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductExchangeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductExchangeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductExchangeCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyTierConfig: {
            payload: Prisma.$LoyaltyTierConfigPayload<ExtArgs>;
            fields: Prisma.LoyaltyTierConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyTierConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyTierConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyTierConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyTierConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyTierConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyTierConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyTierConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyTierConfigCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyTierConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                update: {
                    args: Prisma.LoyaltyTierConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyTierConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyTierConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyTierConfigUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyTierConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTierConfigPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyTierConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyTierConfig>;
                };
                groupBy: {
                    args: Prisma.LoyaltyTierConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyTierConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyTierConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyTierConfigCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyAccount: {
            payload: Prisma.$LoyaltyAccountPayload<ExtArgs>;
            fields: Prisma.LoyaltyAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                update: {
                    args: Prisma.LoyaltyAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyAccount>;
                };
                groupBy: {
                    args: Prisma.LoyaltyAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyAccountCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyTransaction: {
            payload: Prisma.$LoyaltyTransactionPayload<ExtArgs>;
            fields: Prisma.LoyaltyTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>[];
                };
                create: {
                    args: Prisma.LoyaltyTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyTransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                update: {
                    args: Prisma.LoyaltyTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyTransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyTransaction>;
                };
                groupBy: {
                    args: Prisma.LoyaltyTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyTransactionCountAggregateOutputType> | number;
                };
            };
        };
        LoyaltyEarnRule: {
            payload: Prisma.$LoyaltyEarnRulePayload<ExtArgs>;
            fields: Prisma.LoyaltyEarnRuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoyaltyEarnRuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoyaltyEarnRuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                findFirst: {
                    args: Prisma.LoyaltyEarnRuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoyaltyEarnRuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                findMany: {
                    args: Prisma.LoyaltyEarnRuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>[];
                };
                create: {
                    args: Prisma.LoyaltyEarnRuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                createMany: {
                    args: Prisma.LoyaltyEarnRuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoyaltyEarnRuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>[];
                };
                delete: {
                    args: Prisma.LoyaltyEarnRuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                update: {
                    args: Prisma.LoyaltyEarnRuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                deleteMany: {
                    args: Prisma.LoyaltyEarnRuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoyaltyEarnRuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoyaltyEarnRuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>[];
                };
                upsert: {
                    args: Prisma.LoyaltyEarnRuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LoyaltyEarnRulePayload>;
                };
                aggregate: {
                    args: Prisma.LoyaltyEarnRuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLoyaltyEarnRule>;
                };
                groupBy: {
                    args: Prisma.LoyaltyEarnRuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyEarnRuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoyaltyEarnRuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoyaltyEarnRuleCountAggregateOutputType> | number;
                };
            };
        };
        RewardCatalog: {
            payload: Prisma.$RewardCatalogPayload<ExtArgs>;
            fields: Prisma.RewardCatalogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RewardCatalogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RewardCatalogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                findFirst: {
                    args: Prisma.RewardCatalogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RewardCatalogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                findMany: {
                    args: Prisma.RewardCatalogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                create: {
                    args: Prisma.RewardCatalogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                createMany: {
                    args: Prisma.RewardCatalogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RewardCatalogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                delete: {
                    args: Prisma.RewardCatalogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                update: {
                    args: Prisma.RewardCatalogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                deleteMany: {
                    args: Prisma.RewardCatalogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RewardCatalogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RewardCatalogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>[];
                };
                upsert: {
                    args: Prisma.RewardCatalogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardCatalogPayload>;
                };
                aggregate: {
                    args: Prisma.RewardCatalogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRewardCatalog>;
                };
                groupBy: {
                    args: Prisma.RewardCatalogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardCatalogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RewardCatalogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardCatalogCountAggregateOutputType> | number;
                };
            };
        };
        RewardRedemption: {
            payload: Prisma.$RewardRedemptionPayload<ExtArgs>;
            fields: Prisma.RewardRedemptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RewardRedemptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                findFirst: {
                    args: Prisma.RewardRedemptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RewardRedemptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                findMany: {
                    args: Prisma.RewardRedemptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                create: {
                    args: Prisma.RewardRedemptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                createMany: {
                    args: Prisma.RewardRedemptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RewardRedemptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                delete: {
                    args: Prisma.RewardRedemptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                update: {
                    args: Prisma.RewardRedemptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                deleteMany: {
                    args: Prisma.RewardRedemptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RewardRedemptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[];
                };
                upsert: {
                    args: Prisma.RewardRedemptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>;
                };
                aggregate: {
                    args: Prisma.RewardRedemptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRewardRedemption>;
                };
                groupBy: {
                    args: Prisma.RewardRedemptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardRedemptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RewardRedemptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RewardRedemptionCountAggregateOutputType> | number;
                };
            };
        };
        Segment: {
            payload: Prisma.$SegmentPayload<ExtArgs>;
            fields: Prisma.SegmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SegmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SegmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                findFirst: {
                    args: Prisma.SegmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SegmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                findMany: {
                    args: Prisma.SegmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>[];
                };
                create: {
                    args: Prisma.SegmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                createMany: {
                    args: Prisma.SegmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SegmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>[];
                };
                delete: {
                    args: Prisma.SegmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                update: {
                    args: Prisma.SegmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                deleteMany: {
                    args: Prisma.SegmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SegmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SegmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>[];
                };
                upsert: {
                    args: Prisma.SegmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SegmentPayload>;
                };
                aggregate: {
                    args: Prisma.SegmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSegment>;
                };
                groupBy: {
                    args: Prisma.SegmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SegmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SegmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SegmentCountAggregateOutputType> | number;
                };
            };
        };
        Journey: {
            payload: Prisma.$JourneyPayload<ExtArgs>;
            fields: Prisma.JourneyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JourneyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JourneyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                findFirst: {
                    args: Prisma.JourneyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JourneyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                findMany: {
                    args: Prisma.JourneyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>[];
                };
                create: {
                    args: Prisma.JourneyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                createMany: {
                    args: Prisma.JourneyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JourneyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>[];
                };
                delete: {
                    args: Prisma.JourneyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                update: {
                    args: Prisma.JourneyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                deleteMany: {
                    args: Prisma.JourneyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JourneyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JourneyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>[];
                };
                upsert: {
                    args: Prisma.JourneyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JourneyPayload>;
                };
                aggregate: {
                    args: Prisma.JourneyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJourney>;
                };
                groupBy: {
                    args: Prisma.JourneyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JourneyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JourneyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JourneyCountAggregateOutputType> | number;
                };
            };
        };
        MessageTemplate: {
            payload: Prisma.$MessageTemplatePayload<ExtArgs>;
            fields: Prisma.MessageTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.MessageTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                findMany: {
                    args: Prisma.MessageTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[];
                };
                create: {
                    args: Prisma.MessageTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                createMany: {
                    args: Prisma.MessageTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[];
                };
                delete: {
                    args: Prisma.MessageTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                update: {
                    args: Prisma.MessageTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.MessageTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.MessageTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageTemplate>;
                };
                groupBy: {
                    args: Prisma.MessageTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageTemplateCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        AdminUser: {
            payload: Prisma.$AdminUserPayload<ExtArgs>;
            fields: Prisma.AdminUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findFirst: {
                    args: Prisma.AdminUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findMany: {
                    args: Prisma.AdminUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                create: {
                    args: Prisma.AdminUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                createMany: {
                    args: Prisma.AdminUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                delete: {
                    args: Prisma.AdminUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                update: {
                    args: Prisma.AdminUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                aggregate: {
                    args: Prisma.AdminUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminUser>;
                };
                groupBy: {
                    args: Prisma.AdminUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        campaign_control_group: {
            payload: Prisma.$campaign_control_groupPayload<ExtArgs>;
            fields: Prisma.campaign_control_groupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.campaign_control_groupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.campaign_control_groupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                findFirst: {
                    args: Prisma.campaign_control_groupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.campaign_control_groupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                findMany: {
                    args: Prisma.campaign_control_groupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>[];
                };
                create: {
                    args: Prisma.campaign_control_groupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                createMany: {
                    args: Prisma.campaign_control_groupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.campaign_control_groupCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>[];
                };
                delete: {
                    args: Prisma.campaign_control_groupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                update: {
                    args: Prisma.campaign_control_groupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                deleteMany: {
                    args: Prisma.campaign_control_groupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.campaign_control_groupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.campaign_control_groupUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>[];
                };
                upsert: {
                    args: Prisma.campaign_control_groupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$campaign_control_groupPayload>;
                };
                aggregate: {
                    args: Prisma.Campaign_control_groupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaign_control_group>;
                };
                groupBy: {
                    args: Prisma.campaign_control_groupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Campaign_control_groupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.campaign_control_groupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Campaign_control_groupCountAggregateOutputType> | number;
                };
            };
        };
        checklist_definition: {
            payload: Prisma.$checklist_definitionPayload<ExtArgs>;
            fields: Prisma.checklist_definitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.checklist_definitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.checklist_definitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                findFirst: {
                    args: Prisma.checklist_definitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.checklist_definitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                findMany: {
                    args: Prisma.checklist_definitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>[];
                };
                create: {
                    args: Prisma.checklist_definitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                createMany: {
                    args: Prisma.checklist_definitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.checklist_definitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>[];
                };
                delete: {
                    args: Prisma.checklist_definitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                update: {
                    args: Prisma.checklist_definitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                deleteMany: {
                    args: Prisma.checklist_definitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.checklist_definitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.checklist_definitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>[];
                };
                upsert: {
                    args: Prisma.checklist_definitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_definitionPayload>;
                };
                aggregate: {
                    args: Prisma.Checklist_definitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChecklist_definition>;
                };
                groupBy: {
                    args: Prisma.checklist_definitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Checklist_definitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.checklist_definitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Checklist_definitionCountAggregateOutputType> | number;
                };
            };
        };
        checklist_progress: {
            payload: Prisma.$checklist_progressPayload<ExtArgs>;
            fields: Prisma.checklist_progressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.checklist_progressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.checklist_progressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                findFirst: {
                    args: Prisma.checklist_progressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.checklist_progressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                findMany: {
                    args: Prisma.checklist_progressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>[];
                };
                create: {
                    args: Prisma.checklist_progressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                createMany: {
                    args: Prisma.checklist_progressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.checklist_progressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>[];
                };
                delete: {
                    args: Prisma.checklist_progressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                update: {
                    args: Prisma.checklist_progressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                deleteMany: {
                    args: Prisma.checklist_progressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.checklist_progressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.checklist_progressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>[];
                };
                upsert: {
                    args: Prisma.checklist_progressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$checklist_progressPayload>;
                };
                aggregate: {
                    args: Prisma.Checklist_progressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChecklist_progress>;
                };
                groupBy: {
                    args: Prisma.checklist_progressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Checklist_progressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.checklist_progressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Checklist_progressCountAggregateOutputType> | number;
                };
            };
        };
        customer_metrics_daily: {
            payload: Prisma.$customer_metrics_dailyPayload<ExtArgs>;
            fields: Prisma.customer_metrics_dailyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customer_metrics_dailyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customer_metrics_dailyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                findFirst: {
                    args: Prisma.customer_metrics_dailyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customer_metrics_dailyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                findMany: {
                    args: Prisma.customer_metrics_dailyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>[];
                };
                create: {
                    args: Prisma.customer_metrics_dailyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                createMany: {
                    args: Prisma.customer_metrics_dailyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customer_metrics_dailyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>[];
                };
                delete: {
                    args: Prisma.customer_metrics_dailyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                update: {
                    args: Prisma.customer_metrics_dailyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                deleteMany: {
                    args: Prisma.customer_metrics_dailyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customer_metrics_dailyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customer_metrics_dailyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>[];
                };
                upsert: {
                    args: Prisma.customer_metrics_dailyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_metrics_dailyPayload>;
                };
                aggregate: {
                    args: Prisma.Customer_metrics_dailyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer_metrics_daily>;
                };
                groupBy: {
                    args: Prisma.customer_metrics_dailyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_metrics_dailyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customer_metrics_dailyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_metrics_dailyCountAggregateOutputType> | number;
                };
            };
        };
        data_layer_definition: {
            payload: Prisma.$data_layer_definitionPayload<ExtArgs>;
            fields: Prisma.data_layer_definitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.data_layer_definitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.data_layer_definitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                findFirst: {
                    args: Prisma.data_layer_definitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.data_layer_definitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                findMany: {
                    args: Prisma.data_layer_definitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>[];
                };
                create: {
                    args: Prisma.data_layer_definitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                createMany: {
                    args: Prisma.data_layer_definitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.data_layer_definitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>[];
                };
                delete: {
                    args: Prisma.data_layer_definitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                update: {
                    args: Prisma.data_layer_definitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                deleteMany: {
                    args: Prisma.data_layer_definitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.data_layer_definitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.data_layer_definitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>[];
                };
                upsert: {
                    args: Prisma.data_layer_definitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_layer_definitionPayload>;
                };
                aggregate: {
                    args: Prisma.Data_layer_definitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateData_layer_definition>;
                };
                groupBy: {
                    args: Prisma.data_layer_definitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_layer_definitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.data_layer_definitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_layer_definitionCountAggregateOutputType> | number;
                };
            };
        };
        data_quality_flag_log: {
            payload: Prisma.$data_quality_flag_logPayload<ExtArgs>;
            fields: Prisma.data_quality_flag_logFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.data_quality_flag_logFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.data_quality_flag_logFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                findFirst: {
                    args: Prisma.data_quality_flag_logFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.data_quality_flag_logFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                findMany: {
                    args: Prisma.data_quality_flag_logFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>[];
                };
                create: {
                    args: Prisma.data_quality_flag_logCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                createMany: {
                    args: Prisma.data_quality_flag_logCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.data_quality_flag_logCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>[];
                };
                delete: {
                    args: Prisma.data_quality_flag_logDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                update: {
                    args: Prisma.data_quality_flag_logUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                deleteMany: {
                    args: Prisma.data_quality_flag_logDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.data_quality_flag_logUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.data_quality_flag_logUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>[];
                };
                upsert: {
                    args: Prisma.data_quality_flag_logUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_flag_logPayload>;
                };
                aggregate: {
                    args: Prisma.Data_quality_flag_logAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateData_quality_flag_log>;
                };
                groupBy: {
                    args: Prisma.data_quality_flag_logGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_quality_flag_logGroupByOutputType>[];
                };
                count: {
                    args: Prisma.data_quality_flag_logCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_quality_flag_logCountAggregateOutputType> | number;
                };
            };
        };
        data_quality_rule: {
            payload: Prisma.$data_quality_rulePayload<ExtArgs>;
            fields: Prisma.data_quality_ruleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.data_quality_ruleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.data_quality_ruleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                findFirst: {
                    args: Prisma.data_quality_ruleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.data_quality_ruleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                findMany: {
                    args: Prisma.data_quality_ruleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>[];
                };
                create: {
                    args: Prisma.data_quality_ruleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                createMany: {
                    args: Prisma.data_quality_ruleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.data_quality_ruleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>[];
                };
                delete: {
                    args: Prisma.data_quality_ruleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                update: {
                    args: Prisma.data_quality_ruleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                deleteMany: {
                    args: Prisma.data_quality_ruleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.data_quality_ruleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.data_quality_ruleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>[];
                };
                upsert: {
                    args: Prisma.data_quality_ruleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$data_quality_rulePayload>;
                };
                aggregate: {
                    args: Prisma.Data_quality_ruleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateData_quality_rule>;
                };
                groupBy: {
                    args: Prisma.data_quality_ruleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_quality_ruleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.data_quality_ruleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Data_quality_ruleCountAggregateOutputType> | number;
                };
            };
        };
        dsr_request: {
            payload: Prisma.$dsr_requestPayload<ExtArgs>;
            fields: Prisma.dsr_requestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.dsr_requestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.dsr_requestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                findFirst: {
                    args: Prisma.dsr_requestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.dsr_requestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                findMany: {
                    args: Prisma.dsr_requestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>[];
                };
                create: {
                    args: Prisma.dsr_requestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                createMany: {
                    args: Prisma.dsr_requestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.dsr_requestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>[];
                };
                delete: {
                    args: Prisma.dsr_requestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                update: {
                    args: Prisma.dsr_requestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                deleteMany: {
                    args: Prisma.dsr_requestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.dsr_requestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.dsr_requestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>[];
                };
                upsert: {
                    args: Prisma.dsr_requestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dsr_requestPayload>;
                };
                aggregate: {
                    args: Prisma.Dsr_requestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDsr_request>;
                };
                groupBy: {
                    args: Prisma.dsr_requestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsr_requestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.dsr_requestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dsr_requestCountAggregateOutputType> | number;
                };
            };
        };
        event: {
            payload: Prisma.$eventPayload<ExtArgs>;
            fields: Prisma.eventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.eventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.eventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                findFirst: {
                    args: Prisma.eventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.eventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                findMany: {
                    args: Prisma.eventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>[];
                };
                create: {
                    args: Prisma.eventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                createMany: {
                    args: Prisma.eventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.eventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>[];
                };
                delete: {
                    args: Prisma.eventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                update: {
                    args: Prisma.eventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                deleteMany: {
                    args: Prisma.eventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.eventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.eventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>[];
                };
                upsert: {
                    args: Prisma.eventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.eventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.eventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        expert_booking: {
            payload: Prisma.$expert_bookingPayload<ExtArgs>;
            fields: Prisma.expert_bookingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.expert_bookingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.expert_bookingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                findFirst: {
                    args: Prisma.expert_bookingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.expert_bookingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                findMany: {
                    args: Prisma.expert_bookingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>[];
                };
                create: {
                    args: Prisma.expert_bookingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                createMany: {
                    args: Prisma.expert_bookingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.expert_bookingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>[];
                };
                delete: {
                    args: Prisma.expert_bookingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                update: {
                    args: Prisma.expert_bookingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                deleteMany: {
                    args: Prisma.expert_bookingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.expert_bookingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.expert_bookingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>[];
                };
                upsert: {
                    args: Prisma.expert_bookingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_bookingPayload>;
                };
                aggregate: {
                    args: Prisma.Expert_bookingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpert_booking>;
                };
                groupBy: {
                    args: Prisma.expert_bookingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_bookingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.expert_bookingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_bookingCountAggregateOutputType> | number;
                };
            };
        };
        expert_slot: {
            payload: Prisma.$expert_slotPayload<ExtArgs>;
            fields: Prisma.expert_slotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.expert_slotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.expert_slotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                findFirst: {
                    args: Prisma.expert_slotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.expert_slotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                findMany: {
                    args: Prisma.expert_slotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>[];
                };
                create: {
                    args: Prisma.expert_slotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                createMany: {
                    args: Prisma.expert_slotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.expert_slotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>[];
                };
                delete: {
                    args: Prisma.expert_slotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                update: {
                    args: Prisma.expert_slotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                deleteMany: {
                    args: Prisma.expert_slotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.expert_slotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.expert_slotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>[];
                };
                upsert: {
                    args: Prisma.expert_slotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_slotPayload>;
                };
                aggregate: {
                    args: Prisma.Expert_slotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpert_slot>;
                };
                groupBy: {
                    args: Prisma.expert_slotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_slotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.expert_slotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_slotCountAggregateOutputType> | number;
                };
            };
        };
        expert_topic: {
            payload: Prisma.$expert_topicPayload<ExtArgs>;
            fields: Prisma.expert_topicFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.expert_topicFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.expert_topicFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                findFirst: {
                    args: Prisma.expert_topicFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.expert_topicFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                findMany: {
                    args: Prisma.expert_topicFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>[];
                };
                create: {
                    args: Prisma.expert_topicCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                createMany: {
                    args: Prisma.expert_topicCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.expert_topicCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>[];
                };
                delete: {
                    args: Prisma.expert_topicDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                update: {
                    args: Prisma.expert_topicUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                deleteMany: {
                    args: Prisma.expert_topicDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.expert_topicUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.expert_topicUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>[];
                };
                upsert: {
                    args: Prisma.expert_topicUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$expert_topicPayload>;
                };
                aggregate: {
                    args: Prisma.Expert_topicAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExpert_topic>;
                };
                groupBy: {
                    args: Prisma.expert_topicGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_topicGroupByOutputType>[];
                };
                count: {
                    args: Prisma.expert_topicCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Expert_topicCountAggregateOutputType> | number;
                };
            };
        };
        frequency_counter: {
            payload: Prisma.$frequency_counterPayload<ExtArgs>;
            fields: Prisma.frequency_counterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.frequency_counterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.frequency_counterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                findFirst: {
                    args: Prisma.frequency_counterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.frequency_counterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                findMany: {
                    args: Prisma.frequency_counterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>[];
                };
                create: {
                    args: Prisma.frequency_counterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                createMany: {
                    args: Prisma.frequency_counterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.frequency_counterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>[];
                };
                delete: {
                    args: Prisma.frequency_counterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                update: {
                    args: Prisma.frequency_counterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                deleteMany: {
                    args: Prisma.frequency_counterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.frequency_counterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.frequency_counterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>[];
                };
                upsert: {
                    args: Prisma.frequency_counterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$frequency_counterPayload>;
                };
                aggregate: {
                    args: Prisma.Frequency_counterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFrequency_counter>;
                };
                groupBy: {
                    args: Prisma.frequency_counterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Frequency_counterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.frequency_counterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Frequency_counterCountAggregateOutputType> | number;
                };
            };
        };
        integration_job: {
            payload: Prisma.$integration_jobPayload<ExtArgs>;
            fields: Prisma.integration_jobFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.integration_jobFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.integration_jobFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                findFirst: {
                    args: Prisma.integration_jobFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.integration_jobFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                findMany: {
                    args: Prisma.integration_jobFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>[];
                };
                create: {
                    args: Prisma.integration_jobCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                createMany: {
                    args: Prisma.integration_jobCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.integration_jobCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>[];
                };
                delete: {
                    args: Prisma.integration_jobDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                update: {
                    args: Prisma.integration_jobUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                deleteMany: {
                    args: Prisma.integration_jobDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.integration_jobUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.integration_jobUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>[];
                };
                upsert: {
                    args: Prisma.integration_jobUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integration_jobPayload>;
                };
                aggregate: {
                    args: Prisma.Integration_jobAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIntegration_job>;
                };
                groupBy: {
                    args: Prisma.integration_jobGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Integration_jobGroupByOutputType>[];
                };
                count: {
                    args: Prisma.integration_jobCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Integration_jobCountAggregateOutputType> | number;
                };
            };
        };
        journey_run: {
            payload: Prisma.$journey_runPayload<ExtArgs>;
            fields: Prisma.journey_runFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.journey_runFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.journey_runFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                findFirst: {
                    args: Prisma.journey_runFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.journey_runFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                findMany: {
                    args: Prisma.journey_runFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>[];
                };
                create: {
                    args: Prisma.journey_runCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                createMany: {
                    args: Prisma.journey_runCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.journey_runCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>[];
                };
                delete: {
                    args: Prisma.journey_runDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                update: {
                    args: Prisma.journey_runUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                deleteMany: {
                    args: Prisma.journey_runDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.journey_runUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.journey_runUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>[];
                };
                upsert: {
                    args: Prisma.journey_runUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_runPayload>;
                };
                aggregate: {
                    args: Prisma.Journey_runAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJourney_run>;
                };
                groupBy: {
                    args: Prisma.journey_runGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Journey_runGroupByOutputType>[];
                };
                count: {
                    args: Prisma.journey_runCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Journey_runCountAggregateOutputType> | number;
                };
            };
        };
        journey_step_log: {
            payload: Prisma.$journey_step_logPayload<ExtArgs>;
            fields: Prisma.journey_step_logFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.journey_step_logFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.journey_step_logFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                findFirst: {
                    args: Prisma.journey_step_logFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.journey_step_logFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                findMany: {
                    args: Prisma.journey_step_logFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>[];
                };
                create: {
                    args: Prisma.journey_step_logCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                createMany: {
                    args: Prisma.journey_step_logCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.journey_step_logCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>[];
                };
                delete: {
                    args: Prisma.journey_step_logDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                update: {
                    args: Prisma.journey_step_logUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                deleteMany: {
                    args: Prisma.journey_step_logDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.journey_step_logUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.journey_step_logUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>[];
                };
                upsert: {
                    args: Prisma.journey_step_logUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$journey_step_logPayload>;
                };
                aggregate: {
                    args: Prisma.Journey_step_logAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJourney_step_log>;
                };
                groupBy: {
                    args: Prisma.journey_step_logGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Journey_step_logGroupByOutputType>[];
                };
                count: {
                    args: Prisma.journey_step_logCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Journey_step_logCountAggregateOutputType> | number;
                };
            };
        };
        kpi_daily_snapshot: {
            payload: Prisma.$kpi_daily_snapshotPayload<ExtArgs>;
            fields: Prisma.kpi_daily_snapshotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.kpi_daily_snapshotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.kpi_daily_snapshotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                findFirst: {
                    args: Prisma.kpi_daily_snapshotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.kpi_daily_snapshotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                findMany: {
                    args: Prisma.kpi_daily_snapshotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>[];
                };
                create: {
                    args: Prisma.kpi_daily_snapshotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                createMany: {
                    args: Prisma.kpi_daily_snapshotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.kpi_daily_snapshotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>[];
                };
                delete: {
                    args: Prisma.kpi_daily_snapshotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                update: {
                    args: Prisma.kpi_daily_snapshotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                deleteMany: {
                    args: Prisma.kpi_daily_snapshotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.kpi_daily_snapshotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.kpi_daily_snapshotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>[];
                };
                upsert: {
                    args: Prisma.kpi_daily_snapshotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$kpi_daily_snapshotPayload>;
                };
                aggregate: {
                    args: Prisma.Kpi_daily_snapshotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateKpi_daily_snapshot>;
                };
                groupBy: {
                    args: Prisma.kpi_daily_snapshotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Kpi_daily_snapshotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.kpi_daily_snapshotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Kpi_daily_snapshotCountAggregateOutputType> | number;
                };
            };
        };
        message_log: {
            payload: Prisma.$message_logPayload<ExtArgs>;
            fields: Prisma.message_logFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.message_logFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.message_logFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                findFirst: {
                    args: Prisma.message_logFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.message_logFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                findMany: {
                    args: Prisma.message_logFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>[];
                };
                create: {
                    args: Prisma.message_logCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                createMany: {
                    args: Prisma.message_logCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.message_logCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>[];
                };
                delete: {
                    args: Prisma.message_logDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                update: {
                    args: Prisma.message_logUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                deleteMany: {
                    args: Prisma.message_logDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.message_logUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.message_logUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>[];
                };
                upsert: {
                    args: Prisma.message_logUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$message_logPayload>;
                };
                aggregate: {
                    args: Prisma.Message_logAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage_log>;
                };
                groupBy: {
                    args: Prisma.message_logGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Message_logGroupByOutputType>[];
                };
                count: {
                    args: Prisma.message_logCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Message_logCountAggregateOutputType> | number;
                };
            };
        };
        milestone_definition: {
            payload: Prisma.$milestone_definitionPayload<ExtArgs>;
            fields: Prisma.milestone_definitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.milestone_definitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.milestone_definitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                findFirst: {
                    args: Prisma.milestone_definitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.milestone_definitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                findMany: {
                    args: Prisma.milestone_definitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>[];
                };
                create: {
                    args: Prisma.milestone_definitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                createMany: {
                    args: Prisma.milestone_definitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.milestone_definitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>[];
                };
                delete: {
                    args: Prisma.milestone_definitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                update: {
                    args: Prisma.milestone_definitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                deleteMany: {
                    args: Prisma.milestone_definitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.milestone_definitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.milestone_definitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>[];
                };
                upsert: {
                    args: Prisma.milestone_definitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_definitionPayload>;
                };
                aggregate: {
                    args: Prisma.Milestone_definitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMilestone_definition>;
                };
                groupBy: {
                    args: Prisma.milestone_definitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Milestone_definitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.milestone_definitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Milestone_definitionCountAggregateOutputType> | number;
                };
            };
        };
        milestone_progress: {
            payload: Prisma.$milestone_progressPayload<ExtArgs>;
            fields: Prisma.milestone_progressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.milestone_progressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.milestone_progressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                findFirst: {
                    args: Prisma.milestone_progressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.milestone_progressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                findMany: {
                    args: Prisma.milestone_progressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>[];
                };
                create: {
                    args: Prisma.milestone_progressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                createMany: {
                    args: Prisma.milestone_progressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.milestone_progressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>[];
                };
                delete: {
                    args: Prisma.milestone_progressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                update: {
                    args: Prisma.milestone_progressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                deleteMany: {
                    args: Prisma.milestone_progressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.milestone_progressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.milestone_progressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>[];
                };
                upsert: {
                    args: Prisma.milestone_progressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$milestone_progressPayload>;
                };
                aggregate: {
                    args: Prisma.Milestone_progressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMilestone_progress>;
                };
                groupBy: {
                    args: Prisma.milestone_progressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Milestone_progressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.milestone_progressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Milestone_progressCountAggregateOutputType> | number;
                };
            };
        };
        points_liability_snapshot: {
            payload: Prisma.$points_liability_snapshotPayload<ExtArgs>;
            fields: Prisma.points_liability_snapshotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.points_liability_snapshotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.points_liability_snapshotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                findFirst: {
                    args: Prisma.points_liability_snapshotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.points_liability_snapshotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                findMany: {
                    args: Prisma.points_liability_snapshotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>[];
                };
                create: {
                    args: Prisma.points_liability_snapshotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                createMany: {
                    args: Prisma.points_liability_snapshotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.points_liability_snapshotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>[];
                };
                delete: {
                    args: Prisma.points_liability_snapshotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                update: {
                    args: Prisma.points_liability_snapshotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                deleteMany: {
                    args: Prisma.points_liability_snapshotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.points_liability_snapshotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.points_liability_snapshotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>[];
                };
                upsert: {
                    args: Prisma.points_liability_snapshotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$points_liability_snapshotPayload>;
                };
                aggregate: {
                    args: Prisma.Points_liability_snapshotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoints_liability_snapshot>;
                };
                groupBy: {
                    args: Prisma.points_liability_snapshotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Points_liability_snapshotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.points_liability_snapshotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Points_liability_snapshotCountAggregateOutputType> | number;
                };
            };
        };
        product_purchase_cycle: {
            payload: Prisma.$product_purchase_cyclePayload<ExtArgs>;
            fields: Prisma.product_purchase_cycleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_purchase_cycleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_purchase_cycleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                findFirst: {
                    args: Prisma.product_purchase_cycleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_purchase_cycleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                findMany: {
                    args: Prisma.product_purchase_cycleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>[];
                };
                create: {
                    args: Prisma.product_purchase_cycleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                createMany: {
                    args: Prisma.product_purchase_cycleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_purchase_cycleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>[];
                };
                delete: {
                    args: Prisma.product_purchase_cycleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                update: {
                    args: Prisma.product_purchase_cycleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                deleteMany: {
                    args: Prisma.product_purchase_cycleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_purchase_cycleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_purchase_cycleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>[];
                };
                upsert: {
                    args: Prisma.product_purchase_cycleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_purchase_cyclePayload>;
                };
                aggregate: {
                    args: Prisma.Product_purchase_cycleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_purchase_cycle>;
                };
                groupBy: {
                    args: Prisma.product_purchase_cycleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_purchase_cycleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_purchase_cycleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_purchase_cycleCountAggregateOutputType> | number;
                };
            };
        };
        product_serial: {
            payload: Prisma.$product_serialPayload<ExtArgs>;
            fields: Prisma.product_serialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.product_serialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.product_serialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                findFirst: {
                    args: Prisma.product_serialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.product_serialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                findMany: {
                    args: Prisma.product_serialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>[];
                };
                create: {
                    args: Prisma.product_serialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                createMany: {
                    args: Prisma.product_serialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.product_serialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>[];
                };
                delete: {
                    args: Prisma.product_serialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                update: {
                    args: Prisma.product_serialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                deleteMany: {
                    args: Prisma.product_serialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.product_serialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.product_serialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>[];
                };
                upsert: {
                    args: Prisma.product_serialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$product_serialPayload>;
                };
                aggregate: {
                    args: Prisma.Product_serialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct_serial>;
                };
                groupBy: {
                    args: Prisma.product_serialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_serialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.product_serialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Product_serialCountAggregateOutputType> | number;
                };
            };
        };
        quiz_definition: {
            payload: Prisma.$quiz_definitionPayload<ExtArgs>;
            fields: Prisma.quiz_definitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_definitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_definitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                findFirst: {
                    args: Prisma.quiz_definitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_definitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                findMany: {
                    args: Prisma.quiz_definitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>[];
                };
                create: {
                    args: Prisma.quiz_definitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                createMany: {
                    args: Prisma.quiz_definitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_definitionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>[];
                };
                delete: {
                    args: Prisma.quiz_definitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                update: {
                    args: Prisma.quiz_definitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_definitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_definitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_definitionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>[];
                };
                upsert: {
                    args: Prisma.quiz_definitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_definitionPayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_definitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_definition>;
                };
                groupBy: {
                    args: Prisma.quiz_definitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_definitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_definitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_definitionCountAggregateOutputType> | number;
                };
            };
        };
        quiz_response: {
            payload: Prisma.$quiz_responsePayload<ExtArgs>;
            fields: Prisma.quiz_responseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_responseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_responseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                findFirst: {
                    args: Prisma.quiz_responseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_responseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                findMany: {
                    args: Prisma.quiz_responseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>[];
                };
                create: {
                    args: Prisma.quiz_responseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                createMany: {
                    args: Prisma.quiz_responseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_responseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>[];
                };
                delete: {
                    args: Prisma.quiz_responseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                update: {
                    args: Prisma.quiz_responseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_responseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_responseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_responseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>[];
                };
                upsert: {
                    args: Prisma.quiz_responseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_responsePayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_responseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_response>;
                };
                groupBy: {
                    args: Prisma.quiz_responseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_responseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_responseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_responseCountAggregateOutputType> | number;
                };
            };
        };
        referral_code: {
            payload: Prisma.$referral_codePayload<ExtArgs>;
            fields: Prisma.referral_codeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.referral_codeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.referral_codeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                findFirst: {
                    args: Prisma.referral_codeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.referral_codeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                findMany: {
                    args: Prisma.referral_codeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>[];
                };
                create: {
                    args: Prisma.referral_codeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                createMany: {
                    args: Prisma.referral_codeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.referral_codeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>[];
                };
                delete: {
                    args: Prisma.referral_codeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                update: {
                    args: Prisma.referral_codeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                deleteMany: {
                    args: Prisma.referral_codeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.referral_codeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.referral_codeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>[];
                };
                upsert: {
                    args: Prisma.referral_codeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_codePayload>;
                };
                aggregate: {
                    args: Prisma.Referral_codeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferral_code>;
                };
                groupBy: {
                    args: Prisma.referral_codeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Referral_codeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.referral_codeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Referral_codeCountAggregateOutputType> | number;
                };
            };
        };
        referral_conversion: {
            payload: Prisma.$referral_conversionPayload<ExtArgs>;
            fields: Prisma.referral_conversionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.referral_conversionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.referral_conversionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                findFirst: {
                    args: Prisma.referral_conversionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.referral_conversionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                findMany: {
                    args: Prisma.referral_conversionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>[];
                };
                create: {
                    args: Prisma.referral_conversionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                createMany: {
                    args: Prisma.referral_conversionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.referral_conversionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>[];
                };
                delete: {
                    args: Prisma.referral_conversionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                update: {
                    args: Prisma.referral_conversionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                deleteMany: {
                    args: Prisma.referral_conversionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.referral_conversionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.referral_conversionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>[];
                };
                upsert: {
                    args: Prisma.referral_conversionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$referral_conversionPayload>;
                };
                aggregate: {
                    args: Prisma.Referral_conversionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReferral_conversion>;
                };
                groupBy: {
                    args: Prisma.referral_conversionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Referral_conversionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.referral_conversionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Referral_conversionCountAggregateOutputType> | number;
                };
            };
        };
        replenishment_schedule: {
            payload: Prisma.$replenishment_schedulePayload<ExtArgs>;
            fields: Prisma.replenishment_scheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.replenishment_scheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.replenishment_scheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                findFirst: {
                    args: Prisma.replenishment_scheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.replenishment_scheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                findMany: {
                    args: Prisma.replenishment_scheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>[];
                };
                create: {
                    args: Prisma.replenishment_scheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                createMany: {
                    args: Prisma.replenishment_scheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.replenishment_scheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>[];
                };
                delete: {
                    args: Prisma.replenishment_scheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                update: {
                    args: Prisma.replenishment_scheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                deleteMany: {
                    args: Prisma.replenishment_scheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.replenishment_scheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.replenishment_scheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>[];
                };
                upsert: {
                    args: Prisma.replenishment_scheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$replenishment_schedulePayload>;
                };
                aggregate: {
                    args: Prisma.Replenishment_scheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReplenishment_schedule>;
                };
                groupBy: {
                    args: Prisma.replenishment_scheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Replenishment_scheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.replenishment_scheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Replenishment_scheduleCountAggregateOutputType> | number;
                };
            };
        };
        rfm_snapshot: {
            payload: Prisma.$rfm_snapshotPayload<ExtArgs>;
            fields: Prisma.rfm_snapshotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rfm_snapshotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rfm_snapshotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                findFirst: {
                    args: Prisma.rfm_snapshotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rfm_snapshotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                findMany: {
                    args: Prisma.rfm_snapshotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>[];
                };
                create: {
                    args: Prisma.rfm_snapshotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                createMany: {
                    args: Prisma.rfm_snapshotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rfm_snapshotCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>[];
                };
                delete: {
                    args: Prisma.rfm_snapshotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                update: {
                    args: Prisma.rfm_snapshotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                deleteMany: {
                    args: Prisma.rfm_snapshotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rfm_snapshotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rfm_snapshotUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>[];
                };
                upsert: {
                    args: Prisma.rfm_snapshotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rfm_snapshotPayload>;
                };
                aggregate: {
                    args: Prisma.Rfm_snapshotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRfm_snapshot>;
                };
                groupBy: {
                    args: Prisma.rfm_snapshotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rfm_snapshotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rfm_snapshotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Rfm_snapshotCountAggregateOutputType> | number;
                };
            };
        };
        segment_membership: {
            payload: Prisma.$segment_membershipPayload<ExtArgs>;
            fields: Prisma.segment_membershipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.segment_membershipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.segment_membershipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                findFirst: {
                    args: Prisma.segment_membershipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.segment_membershipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                findMany: {
                    args: Prisma.segment_membershipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>[];
                };
                create: {
                    args: Prisma.segment_membershipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                createMany: {
                    args: Prisma.segment_membershipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.segment_membershipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>[];
                };
                delete: {
                    args: Prisma.segment_membershipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                update: {
                    args: Prisma.segment_membershipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                deleteMany: {
                    args: Prisma.segment_membershipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.segment_membershipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.segment_membershipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>[];
                };
                upsert: {
                    args: Prisma.segment_membershipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$segment_membershipPayload>;
                };
                aggregate: {
                    args: Prisma.Segment_membershipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSegment_membership>;
                };
                groupBy: {
                    args: Prisma.segment_membershipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Segment_membershipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.segment_membershipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Segment_membershipCountAggregateOutputType> | number;
                };
            };
        };
        serial_batch: {
            payload: Prisma.$serial_batchPayload<ExtArgs>;
            fields: Prisma.serial_batchFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.serial_batchFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.serial_batchFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                findFirst: {
                    args: Prisma.serial_batchFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.serial_batchFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                findMany: {
                    args: Prisma.serial_batchFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>[];
                };
                create: {
                    args: Prisma.serial_batchCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                createMany: {
                    args: Prisma.serial_batchCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.serial_batchCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>[];
                };
                delete: {
                    args: Prisma.serial_batchDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                update: {
                    args: Prisma.serial_batchUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                deleteMany: {
                    args: Prisma.serial_batchDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.serial_batchUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.serial_batchUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>[];
                };
                upsert: {
                    args: Prisma.serial_batchUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_batchPayload>;
                };
                aggregate: {
                    args: Prisma.Serial_batchAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSerial_batch>;
                };
                groupBy: {
                    args: Prisma.serial_batchGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Serial_batchGroupByOutputType>[];
                };
                count: {
                    args: Prisma.serial_batchCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Serial_batchCountAggregateOutputType> | number;
                };
            };
        };
        serial_scan: {
            payload: Prisma.$serial_scanPayload<ExtArgs>;
            fields: Prisma.serial_scanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.serial_scanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.serial_scanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                findFirst: {
                    args: Prisma.serial_scanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.serial_scanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                findMany: {
                    args: Prisma.serial_scanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>[];
                };
                create: {
                    args: Prisma.serial_scanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                createMany: {
                    args: Prisma.serial_scanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.serial_scanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>[];
                };
                delete: {
                    args: Prisma.serial_scanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                update: {
                    args: Prisma.serial_scanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                deleteMany: {
                    args: Prisma.serial_scanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.serial_scanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.serial_scanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>[];
                };
                upsert: {
                    args: Prisma.serial_scanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$serial_scanPayload>;
                };
                aggregate: {
                    args: Prisma.Serial_scanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSerial_scan>;
                };
                groupBy: {
                    args: Prisma.serial_scanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Serial_scanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.serial_scanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Serial_scanCountAggregateOutputType> | number;
                };
            };
        };
        session: {
            payload: Prisma.$sessionPayload<ExtArgs>;
            fields: Prisma.sessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                findFirst: {
                    args: Prisma.sessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                findMany: {
                    args: Prisma.sessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>[];
                };
                create: {
                    args: Prisma.sessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                createMany: {
                    args: Prisma.sessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>[];
                };
                delete: {
                    args: Prisma.sessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                update: {
                    args: Prisma.sessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                deleteMany: {
                    args: Prisma.sessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>[];
                };
                upsert: {
                    args: Prisma.sessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.sessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        subscription: {
            payload: Prisma.$subscriptionPayload<ExtArgs>;
            fields: Prisma.subscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.subscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                findMany: {
                    args: Prisma.subscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>[];
                };
                create: {
                    args: Prisma.subscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                createMany: {
                    args: Prisma.subscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>[];
                };
                delete: {
                    args: Prisma.subscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                update: {
                    args: Prisma.subscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.subscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.subscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.subscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        subscription_delivery: {
            payload: Prisma.$subscription_deliveryPayload<ExtArgs>;
            fields: Prisma.subscription_deliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscription_deliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscription_deliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                findFirst: {
                    args: Prisma.subscription_deliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscription_deliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                findMany: {
                    args: Prisma.subscription_deliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>[];
                };
                create: {
                    args: Prisma.subscription_deliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                createMany: {
                    args: Prisma.subscription_deliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscription_deliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>[];
                };
                delete: {
                    args: Prisma.subscription_deliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                update: {
                    args: Prisma.subscription_deliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.subscription_deliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscription_deliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscription_deliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>[];
                };
                upsert: {
                    args: Prisma.subscription_deliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_deliveryPayload>;
                };
                aggregate: {
                    args: Prisma.Subscription_deliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription_delivery>;
                };
                groupBy: {
                    args: Prisma.subscription_deliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_deliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscription_deliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_deliveryCountAggregateOutputType> | number;
                };
            };
        };
        subscription_item: {
            payload: Prisma.$subscription_itemPayload<ExtArgs>;
            fields: Prisma.subscription_itemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscription_itemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscription_itemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                findFirst: {
                    args: Prisma.subscription_itemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscription_itemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                findMany: {
                    args: Prisma.subscription_itemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>[];
                };
                create: {
                    args: Prisma.subscription_itemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                createMany: {
                    args: Prisma.subscription_itemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscription_itemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>[];
                };
                delete: {
                    args: Prisma.subscription_itemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                update: {
                    args: Prisma.subscription_itemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                deleteMany: {
                    args: Prisma.subscription_itemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscription_itemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscription_itemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>[];
                };
                upsert: {
                    args: Prisma.subscription_itemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_itemPayload>;
                };
                aggregate: {
                    args: Prisma.Subscription_itemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription_item>;
                };
                groupBy: {
                    args: Prisma.subscription_itemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_itemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscription_itemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_itemCountAggregateOutputType> | number;
                };
            };
        };
        warranty_registration: {
            payload: Prisma.$warranty_registrationPayload<ExtArgs>;
            fields: Prisma.warranty_registrationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.warranty_registrationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.warranty_registrationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                findFirst: {
                    args: Prisma.warranty_registrationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.warranty_registrationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                findMany: {
                    args: Prisma.warranty_registrationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>[];
                };
                create: {
                    args: Prisma.warranty_registrationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                createMany: {
                    args: Prisma.warranty_registrationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.warranty_registrationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>[];
                };
                delete: {
                    args: Prisma.warranty_registrationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                update: {
                    args: Prisma.warranty_registrationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                deleteMany: {
                    args: Prisma.warranty_registrationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.warranty_registrationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.warranty_registrationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>[];
                };
                upsert: {
                    args: Prisma.warranty_registrationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$warranty_registrationPayload>;
                };
                aggregate: {
                    args: Prisma.Warranty_registrationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWarranty_registration>;
                };
                groupBy: {
                    args: Prisma.warranty_registrationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Warranty_registrationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.warranty_registrationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Warranty_registrationCountAggregateOutputType> | number;
                };
            };
        };
        webhook_inbox: {
            payload: Prisma.$webhook_inboxPayload<ExtArgs>;
            fields: Prisma.webhook_inboxFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.webhook_inboxFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.webhook_inboxFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                findFirst: {
                    args: Prisma.webhook_inboxFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.webhook_inboxFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                findMany: {
                    args: Prisma.webhook_inboxFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>[];
                };
                create: {
                    args: Prisma.webhook_inboxCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                createMany: {
                    args: Prisma.webhook_inboxCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.webhook_inboxCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>[];
                };
                delete: {
                    args: Prisma.webhook_inboxDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                update: {
                    args: Prisma.webhook_inboxUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                deleteMany: {
                    args: Prisma.webhook_inboxDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.webhook_inboxUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.webhook_inboxUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>[];
                };
                upsert: {
                    args: Prisma.webhook_inboxUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$webhook_inboxPayload>;
                };
                aggregate: {
                    args: Prisma.Webhook_inboxAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebhook_inbox>;
                };
                groupBy: {
                    args: Prisma.webhook_inboxGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webhook_inboxGroupByOutputType>[];
                };
                count: {
                    args: Prisma.webhook_inboxCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Webhook_inboxCountAggregateOutputType> | number;
                };
            };
        };
        SystemConfig: {
            payload: Prisma.$SystemConfigPayload<ExtArgs>;
            fields: Prisma.SystemConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                findFirst: {
                    args: Prisma.SystemConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                findMany: {
                    args: Prisma.SystemConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>[];
                };
                create: {
                    args: Prisma.SystemConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                createMany: {
                    args: Prisma.SystemConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>[];
                };
                delete: {
                    args: Prisma.SystemConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                update: {
                    args: Prisma.SystemConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>[];
                };
                upsert: {
                    args: Prisma.SystemConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SystemConfigPayload>;
                };
                aggregate: {
                    args: Prisma.SystemConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSystemConfig>;
                };
                groupBy: {
                    args: Prisma.SystemConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SystemConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SystemConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SystemConfigCountAggregateOutputType> | number;
                };
            };
        };
        DataHub: {
            payload: Prisma.$DataHubPayload<ExtArgs>;
            fields: Prisma.DataHubFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DataHubFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DataHubFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                findFirst: {
                    args: Prisma.DataHubFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DataHubFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                findMany: {
                    args: Prisma.DataHubFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>[];
                };
                create: {
                    args: Prisma.DataHubCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                createMany: {
                    args: Prisma.DataHubCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DataHubCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>[];
                };
                delete: {
                    args: Prisma.DataHubDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                update: {
                    args: Prisma.DataHubUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                deleteMany: {
                    args: Prisma.DataHubDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DataHubUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DataHubUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>[];
                };
                upsert: {
                    args: Prisma.DataHubUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubPayload>;
                };
                aggregate: {
                    args: Prisma.DataHubAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDataHub>;
                };
                groupBy: {
                    args: Prisma.DataHubGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DataHubCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubCountAggregateOutputType> | number;
                };
            };
        };
        DynamicAction: {
            payload: Prisma.$DynamicActionPayload<ExtArgs>;
            fields: Prisma.DynamicActionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DynamicActionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DynamicActionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                findFirst: {
                    args: Prisma.DynamicActionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DynamicActionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                findMany: {
                    args: Prisma.DynamicActionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>[];
                };
                create: {
                    args: Prisma.DynamicActionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                createMany: {
                    args: Prisma.DynamicActionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DynamicActionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>[];
                };
                delete: {
                    args: Prisma.DynamicActionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                update: {
                    args: Prisma.DynamicActionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                deleteMany: {
                    args: Prisma.DynamicActionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DynamicActionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DynamicActionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>[];
                };
                upsert: {
                    args: Prisma.DynamicActionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPayload>;
                };
                aggregate: {
                    args: Prisma.DynamicActionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDynamicAction>;
                };
                groupBy: {
                    args: Prisma.DynamicActionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DynamicActionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionCountAggregateOutputType> | number;
                };
            };
        };
        DynamicActionPage: {
            payload: Prisma.$DynamicActionPagePayload<ExtArgs>;
            fields: Prisma.DynamicActionPageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DynamicActionPageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DynamicActionPageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                findFirst: {
                    args: Prisma.DynamicActionPageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DynamicActionPageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                findMany: {
                    args: Prisma.DynamicActionPageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>[];
                };
                create: {
                    args: Prisma.DynamicActionPageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                createMany: {
                    args: Prisma.DynamicActionPageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DynamicActionPageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>[];
                };
                delete: {
                    args: Prisma.DynamicActionPageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                update: {
                    args: Prisma.DynamicActionPageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                deleteMany: {
                    args: Prisma.DynamicActionPageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DynamicActionPageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DynamicActionPageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>[];
                };
                upsert: {
                    args: Prisma.DynamicActionPageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionPagePayload>;
                };
                aggregate: {
                    args: Prisma.DynamicActionPageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDynamicActionPage>;
                };
                groupBy: {
                    args: Prisma.DynamicActionPageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionPageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DynamicActionPageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionPageCountAggregateOutputType> | number;
                };
            };
        };
        DynamicActionComponent: {
            payload: Prisma.$DynamicActionComponentPayload<ExtArgs>;
            fields: Prisma.DynamicActionComponentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DynamicActionComponentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DynamicActionComponentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                findFirst: {
                    args: Prisma.DynamicActionComponentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DynamicActionComponentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                findMany: {
                    args: Prisma.DynamicActionComponentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>[];
                };
                create: {
                    args: Prisma.DynamicActionComponentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                createMany: {
                    args: Prisma.DynamicActionComponentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DynamicActionComponentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>[];
                };
                delete: {
                    args: Prisma.DynamicActionComponentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                update: {
                    args: Prisma.DynamicActionComponentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                deleteMany: {
                    args: Prisma.DynamicActionComponentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DynamicActionComponentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DynamicActionComponentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>[];
                };
                upsert: {
                    args: Prisma.DynamicActionComponentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DynamicActionComponentPayload>;
                };
                aggregate: {
                    args: Prisma.DynamicActionComponentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDynamicActionComponent>;
                };
                groupBy: {
                    args: Prisma.DynamicActionComponentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionComponentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DynamicActionComponentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DynamicActionComponentCountAggregateOutputType> | number;
                };
            };
        };
        DataHubTable: {
            payload: Prisma.$DataHubTablePayload<ExtArgs>;
            fields: Prisma.DataHubTableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DataHubTableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DataHubTableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                findFirst: {
                    args: Prisma.DataHubTableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DataHubTableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                findMany: {
                    args: Prisma.DataHubTableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>[];
                };
                create: {
                    args: Prisma.DataHubTableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                createMany: {
                    args: Prisma.DataHubTableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DataHubTableCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>[];
                };
                delete: {
                    args: Prisma.DataHubTableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                update: {
                    args: Prisma.DataHubTableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                deleteMany: {
                    args: Prisma.DataHubTableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DataHubTableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DataHubTableUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>[];
                };
                upsert: {
                    args: Prisma.DataHubTableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubTablePayload>;
                };
                aggregate: {
                    args: Prisma.DataHubTableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDataHubTable>;
                };
                groupBy: {
                    args: Prisma.DataHubTableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubTableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DataHubTableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubTableCountAggregateOutputType> | number;
                };
            };
        };
        DataHubColumn: {
            payload: Prisma.$DataHubColumnPayload<ExtArgs>;
            fields: Prisma.DataHubColumnFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DataHubColumnFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DataHubColumnFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                findFirst: {
                    args: Prisma.DataHubColumnFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DataHubColumnFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                findMany: {
                    args: Prisma.DataHubColumnFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>[];
                };
                create: {
                    args: Prisma.DataHubColumnCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                createMany: {
                    args: Prisma.DataHubColumnCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DataHubColumnCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>[];
                };
                delete: {
                    args: Prisma.DataHubColumnDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                update: {
                    args: Prisma.DataHubColumnUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                deleteMany: {
                    args: Prisma.DataHubColumnDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DataHubColumnUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DataHubColumnUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>[];
                };
                upsert: {
                    args: Prisma.DataHubColumnUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubColumnPayload>;
                };
                aggregate: {
                    args: Prisma.DataHubColumnAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDataHubColumn>;
                };
                groupBy: {
                    args: Prisma.DataHubColumnGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubColumnGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DataHubColumnCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubColumnCountAggregateOutputType> | number;
                };
            };
        };
        DataHubRecord: {
            payload: Prisma.$DataHubRecordPayload<ExtArgs>;
            fields: Prisma.DataHubRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DataHubRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DataHubRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                findFirst: {
                    args: Prisma.DataHubRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DataHubRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                findMany: {
                    args: Prisma.DataHubRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>[];
                };
                create: {
                    args: Prisma.DataHubRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                createMany: {
                    args: Prisma.DataHubRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DataHubRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>[];
                };
                delete: {
                    args: Prisma.DataHubRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                update: {
                    args: Prisma.DataHubRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.DataHubRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DataHubRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DataHubRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>[];
                };
                upsert: {
                    args: Prisma.DataHubRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DataHubRecordPayload>;
                };
                aggregate: {
                    args: Prisma.DataHubRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDataHubRecord>;
                };
                groupBy: {
                    args: Prisma.DataHubRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DataHubRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DataHubRecordCountAggregateOutputType> | number;
                };
            };
        };
        ZaloOA: {
            payload: Prisma.$ZaloOAPayload<ExtArgs>;
            fields: Prisma.ZaloOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ZaloOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ZaloOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                findFirst: {
                    args: Prisma.ZaloOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ZaloOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                findMany: {
                    args: Prisma.ZaloOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>[];
                };
                create: {
                    args: Prisma.ZaloOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                createMany: {
                    args: Prisma.ZaloOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ZaloOACreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>[];
                };
                delete: {
                    args: Prisma.ZaloOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                update: {
                    args: Prisma.ZaloOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                deleteMany: {
                    args: Prisma.ZaloOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ZaloOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ZaloOAUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>[];
                };
                upsert: {
                    args: Prisma.ZaloOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloOAPayload>;
                };
                aggregate: {
                    args: Prisma.ZaloOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateZaloOA>;
                };
                groupBy: {
                    args: Prisma.ZaloOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZaloOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ZaloOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZaloOACountAggregateOutputType> | number;
                };
            };
        };
        ZaloMiniApp: {
            payload: Prisma.$ZaloMiniAppPayload<ExtArgs>;
            fields: Prisma.ZaloMiniAppFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ZaloMiniAppFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ZaloMiniAppFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                findFirst: {
                    args: Prisma.ZaloMiniAppFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ZaloMiniAppFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                findMany: {
                    args: Prisma.ZaloMiniAppFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>[];
                };
                create: {
                    args: Prisma.ZaloMiniAppCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                createMany: {
                    args: Prisma.ZaloMiniAppCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ZaloMiniAppCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>[];
                };
                delete: {
                    args: Prisma.ZaloMiniAppDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                update: {
                    args: Prisma.ZaloMiniAppUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                deleteMany: {
                    args: Prisma.ZaloMiniAppDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ZaloMiniAppUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ZaloMiniAppUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>[];
                };
                upsert: {
                    args: Prisma.ZaloMiniAppUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ZaloMiniAppPayload>;
                };
                aggregate: {
                    args: Prisma.ZaloMiniAppAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateZaloMiniApp>;
                };
                groupBy: {
                    args: Prisma.ZaloMiniAppGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZaloMiniAppGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ZaloMiniAppCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ZaloMiniAppCountAggregateOutputType> | number;
                };
            };
        };
        SupportTicket: {
            payload: Prisma.$SupportTicketPayload<ExtArgs>;
            fields: Prisma.SupportTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findFirst: {
                    args: Prisma.SupportTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findMany: {
                    args: Prisma.SupportTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                create: {
                    args: Prisma.SupportTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                createMany: {
                    args: Prisma.SupportTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                delete: {
                    args: Prisma.SupportTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                update: {
                    args: Prisma.SupportTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupportTicketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                upsert: {
                    args: Prisma.SupportTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                aggregate: {
                    args: Prisma.SupportTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupportTicket>;
                };
                groupBy: {
                    args: Prisma.SupportTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupportTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketCountAggregateOutputType> | number;
                };
            };
        };
        CustomerDevice: {
            payload: Prisma.$CustomerDevicePayload<ExtArgs>;
            fields: Prisma.CustomerDeviceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerDeviceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerDeviceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                findFirst: {
                    args: Prisma.CustomerDeviceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerDeviceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                findMany: {
                    args: Prisma.CustomerDeviceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>[];
                };
                create: {
                    args: Prisma.CustomerDeviceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                createMany: {
                    args: Prisma.CustomerDeviceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerDeviceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeviceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                update: {
                    args: Prisma.CustomerDeviceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeviceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerDeviceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerDeviceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>[];
                };
                upsert: {
                    args: Prisma.CustomerDeviceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerDevicePayload>;
                };
                aggregate: {
                    args: Prisma.CustomerDeviceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerDevice>;
                };
                groupBy: {
                    args: Prisma.CustomerDeviceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerDeviceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerDeviceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerDeviceCountAggregateOutputType> | number;
                };
            };
        };
        AdminNotification: {
            payload: Prisma.$AdminNotificationPayload<ExtArgs>;
            fields: Prisma.AdminNotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminNotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminNotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                findFirst: {
                    args: Prisma.AdminNotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminNotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                findMany: {
                    args: Prisma.AdminNotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[];
                };
                create: {
                    args: Prisma.AdminNotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                createMany: {
                    args: Prisma.AdminNotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminNotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[];
                };
                delete: {
                    args: Prisma.AdminNotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                update: {
                    args: Prisma.AdminNotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminNotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminNotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminNotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>[];
                };
                upsert: {
                    args: Prisma.AdminNotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminNotificationPayload>;
                };
                aggregate: {
                    args: Prisma.AdminNotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminNotification>;
                };
                groupBy: {
                    args: Prisma.AdminNotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminNotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminNotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminNotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly customerCode: "customerCode";
    readonly phone: "phone";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly avatarUrl: "avatarUrl";
    readonly registrationSource: "registrationSource";
    readonly customerType: "customerType";
    readonly dmsCode: "dmsCode";
    readonly notes: "notes";
    readonly dataQualityFlag: "dataQualityFlag";
    readonly isMerged: "isMerged";
    readonly isActive: "isActive";
    readonly mergedIntoId: "mergedIntoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const CustomerIdentityScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly identityType: "identityType";
    readonly identityValue: "identityValue";
    readonly priority: "priority";
    readonly verified: "verified";
    readonly verifiedAt: "verifiedAt";
    readonly createdAt: "createdAt";
};
export type CustomerIdentityScalarFieldEnum = (typeof CustomerIdentityScalarFieldEnum)[keyof typeof CustomerIdentityScalarFieldEnum];
export declare const MergeCandidateScalarFieldEnum: {
    readonly id: "id";
    readonly customerIdA: "customerIdA";
    readonly customerIdB: "customerIdB";
    readonly matchReason: "matchReason";
    readonly confidenceScore: "confidenceScore";
    readonly status: "status";
    readonly reviewedBy: "reviewedBy";
    readonly reviewedAt: "reviewedAt";
    readonly createdAt: "createdAt";
};
export type MergeCandidateScalarFieldEnum = (typeof MergeCandidateScalarFieldEnum)[keyof typeof MergeCandidateScalarFieldEnum];
export declare const CustomerAddressScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly label: "label";
    readonly addressLine1: "addressLine1";
    readonly addressLine2: "addressLine2";
    readonly ward: "ward";
    readonly district: "district";
    readonly province: "province";
    readonly country: "country";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerAddressScalarFieldEnum = (typeof CustomerAddressScalarFieldEnum)[keyof typeof CustomerAddressScalarFieldEnum];
export declare const CustomerTagScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly tag: "tag";
    readonly source: "source";
    readonly createdAt: "createdAt";
};
export type CustomerTagScalarFieldEnum = (typeof CustomerTagScalarFieldEnum)[keyof typeof CustomerTagScalarFieldEnum];
export declare const BabyScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly name: "name";
    readonly gender: "gender";
    readonly dateOfBirth: "dateOfBirth";
    readonly dueDate: "dueDate";
    readonly isBorn: "isBorn";
    readonly stageCode: "stageCode";
    readonly feedingType: "feedingType";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BabyScalarFieldEnum = (typeof BabyScalarFieldEnum)[keyof typeof BabyScalarFieldEnum];
export declare const BabyGrowthLogScalarFieldEnum: {
    readonly id: "id";
    readonly babyId: "babyId";
    readonly recordedAt: "recordedAt";
    readonly weightKg: "weightKg";
    readonly heightCm: "heightCm";
    readonly headCircumferenceCm: "headCircumferenceCm";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
};
export type BabyGrowthLogScalarFieldEnum = (typeof BabyGrowthLogScalarFieldEnum)[keyof typeof BabyGrowthLogScalarFieldEnum];
export declare const BabyStageHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly babyId: "babyId";
    readonly stageCode: "stageCode";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly createdAt: "createdAt";
};
export type BabyStageHistoryScalarFieldEnum = (typeof BabyStageHistoryScalarFieldEnum)[keyof typeof BabyStageHistoryScalarFieldEnum];
export declare const ConsentDocumentVersionScalarFieldEnum: {
    readonly id: "id";
    readonly documentType: "documentType";
    readonly version: "version";
    readonly contentUrl: "contentUrl";
    readonly effectiveFrom: "effectiveFrom";
    readonly createdAt: "createdAt";
};
export type ConsentDocumentVersionScalarFieldEnum = (typeof ConsentDocumentVersionScalarFieldEnum)[keyof typeof ConsentDocumentVersionScalarFieldEnum];
export declare const ConsentScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly channel: "channel";
    readonly status: "status";
    readonly documentVersionId: "documentVersionId";
    readonly grantedAt: "grantedAt";
    readonly revokedAt: "revokedAt";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConsentScalarFieldEnum = (typeof ConsentScalarFieldEnum)[keyof typeof ConsentScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly sku: "sku";
    readonly wooProductId: "wooProductId";
    readonly name: "name";
    readonly category: "category";
    readonly subcategory: "subcategory";
    readonly brand: "brand";
    readonly stageCodes: "stageCodes";
    readonly price: "price";
    readonly isGwp: "isGwp";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductLifecycleRuleScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly stageCode: "stageCode";
    readonly replaceDays: "replaceDays";
    readonly usageUnit: "usageUnit";
    readonly usageQuantity: "usageQuantity";
    readonly createdAt: "createdAt";
};
export type ProductLifecycleRuleScalarFieldEnum = (typeof ProductLifecycleRuleScalarFieldEnum)[keyof typeof ProductLifecycleRuleScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly wooOrderId: "wooOrderId";
    readonly orderNumber: "orderNumber";
    readonly status: "status";
    readonly totalAmount: "totalAmount";
    readonly discountAmount: "discountAmount";
    readonly netAmount: "netAmount";
    readonly currency: "currency";
    readonly channel: "channel";
    readonly isGwp: "isGwp";
    readonly isInternal: "isInternal";
    readonly shipmentNo: "shipmentNo";
    readonly trackingLink: "trackingLink";
    readonly orderedAt: "orderedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly sku: "sku";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly totalPrice: "totalPrice";
    readonly createdAt: "createdAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const ProductExchangeScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly originalOrderId: "originalOrderId";
    readonly originalProductId: "originalProductId";
    readonly newProductId: "newProductId";
    readonly reason: "reason";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductExchangeScalarFieldEnum = (typeof ProductExchangeScalarFieldEnum)[keyof typeof ProductExchangeScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly productId: "productId";
    readonly orderId: "orderId";
    readonly rating: "rating";
    readonly content: "content";
    readonly isVerifiedPurchase: "isVerifiedPurchase";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const LoyaltyTierConfigScalarFieldEnum: {
    readonly id: "id";
    readonly tierCode: "tierCode";
    readonly tierName: "tierName";
    readonly tierOrder: "tierOrder";
    readonly minNetSpend: "minNetSpend";
    readonly minDistinctMonths: "minDistinctMonths";
    readonly pointsMultiplier: "pointsMultiplier";
    readonly benefits: "benefits";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyTierConfigScalarFieldEnum = (typeof LoyaltyTierConfigScalarFieldEnum)[keyof typeof LoyaltyTierConfigScalarFieldEnum];
export declare const LoyaltyAccountScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly tierId: "tierId";
    readonly pointsBalance: "pointsBalance";
    readonly pointsLifetime: "pointsLifetime";
    readonly pointsRedeemed: "pointsRedeemed";
    readonly pointsExpired: "pointsExpired";
    readonly netSpend: "netSpend";
    readonly distinctOrderMonths: "distinctOrderMonths";
    readonly tierEvaluatedAt: "tierEvaluatedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LoyaltyAccountScalarFieldEnum = (typeof LoyaltyAccountScalarFieldEnum)[keyof typeof LoyaltyAccountScalarFieldEnum];
export declare const LoyaltyTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly loyaltyAccountId: "loyaltyAccountId";
    readonly customerId: "customerId";
    readonly type: "type";
    readonly source: "source";
    readonly points: "points";
    readonly balanceAfter: "balanceAfter";
    readonly referenceType: "referenceType";
    readonly referenceId: "referenceId";
    readonly description: "description";
    readonly expiresAt: "expiresAt";
    readonly idempotencyKey: "idempotencyKey";
    readonly createdAt: "createdAt";
};
export type LoyaltyTransactionScalarFieldEnum = (typeof LoyaltyTransactionScalarFieldEnum)[keyof typeof LoyaltyTransactionScalarFieldEnum];
export declare const LoyaltyEarnRuleScalarFieldEnum: {
    readonly id: "id";
    readonly source: "source";
    readonly ruleName: "ruleName";
    readonly pointsFormula: "pointsFormula";
    readonly conditions: "conditions";
    readonly tierMultiplierApplies: "tierMultiplierApplies";
    readonly isActive: "isActive";
    readonly validFrom: "validFrom";
    readonly validUntil: "validUntil";
    readonly createdAt: "createdAt";
};
export type LoyaltyEarnRuleScalarFieldEnum = (typeof LoyaltyEarnRuleScalarFieldEnum)[keyof typeof LoyaltyEarnRuleScalarFieldEnum];
export declare const RewardCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly category: "category";
    readonly pointsCost: "pointsCost";
    readonly stock: "stock";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly validFrom: "validFrom";
    readonly validUntil: "validUntil";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RewardCatalogScalarFieldEnum = (typeof RewardCatalogScalarFieldEnum)[keyof typeof RewardCatalogScalarFieldEnum];
export declare const RewardRedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly loyaltyAccountId: "loyaltyAccountId";
    readonly customerId: "customerId";
    readonly rewardId: "rewardId";
    readonly pointsSpent: "pointsSpent";
    readonly status: "status";
    readonly shipmentNo: "shipmentNo";
    readonly trackingLink: "trackingLink";
    readonly fulfilledAt: "fulfilledAt";
    readonly idempotencyKey: "idempotencyKey";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum];
export declare const SegmentScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly rules: "rules";
    readonly refreshMode: "refreshMode";
    readonly isSystem: "isSystem";
    readonly isActive: "isActive";
    readonly memberCount: "memberCount";
    readonly lastEvaluatedAt: "lastEvaluatedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SegmentScalarFieldEnum = (typeof SegmentScalarFieldEnum)[keyof typeof SegmentScalarFieldEnum];
export declare const JourneyScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly description: "description";
    readonly graph: "graph";
    readonly triggerEvent: "triggerEvent";
    readonly triggerSegmentId: "triggerSegmentId";
    readonly entryConditions: "entryConditions";
    readonly exitConditions: "exitConditions";
    readonly version: "version";
    readonly status: "status";
    readonly hasControlGroup: "hasControlGroup";
    readonly controlGroupPct: "controlGroupPct";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JourneyScalarFieldEnum = (typeof JourneyScalarFieldEnum)[keyof typeof JourneyScalarFieldEnum];
export declare const MessageTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly channel: "channel";
    readonly name: "name";
    readonly subject: "subject";
    readonly body: "body";
    readonly variables: "variables";
    readonly providerTemplateId: "providerTemplateId";
    readonly approvalStatus: "approvalStatus";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MessageTemplateScalarFieldEnum = (typeof MessageTemplateScalarFieldEnum)[keyof typeof MessageTemplateScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly permissions: "permissions";
    readonly createdAt: "createdAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly fullName: "fullName";
    readonly roleId: "roleId";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly adminUserId: "adminUserId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly oldValues: "oldValues";
    readonly newValues: "newValues";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const Campaign_control_groupScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly journey_id: "journey_id";
    readonly group: "group";
    readonly assigned_at: "assigned_at";
};
export type Campaign_control_groupScalarFieldEnum = (typeof Campaign_control_groupScalarFieldEnum)[keyof typeof Campaign_control_groupScalarFieldEnum];
export declare const Checklist_definitionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly title: "title";
    readonly stage_code: "stage_code";
    readonly items: "items";
    readonly points_reward: "points_reward";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Checklist_definitionScalarFieldEnum = (typeof Checklist_definitionScalarFieldEnum)[keyof typeof Checklist_definitionScalarFieldEnum];
export declare const Checklist_progressScalarFieldEnum: {
    readonly id: "id";
    readonly checklist_id: "checklist_id";
    readonly customer_id: "customer_id";
    readonly baby_id: "baby_id";
    readonly completed_items: "completed_items";
    readonly is_completed: "is_completed";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Checklist_progressScalarFieldEnum = (typeof Checklist_progressScalarFieldEnum)[keyof typeof Checklist_progressScalarFieldEnum];
export declare const Customer_metrics_dailyScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly date: "date";
    readonly total_orders: "total_orders";
    readonly total_revenue: "total_revenue";
    readonly total_items: "total_items";
    readonly page_views: "page_views";
    readonly sessions: "sessions";
    readonly points_earned: "points_earned";
    readonly points_spent: "points_spent";
    readonly created_at: "created_at";
};
export type Customer_metrics_dailyScalarFieldEnum = (typeof Customer_metrics_dailyScalarFieldEnum)[keyof typeof Customer_metrics_dailyScalarFieldEnum];
export declare const Data_layer_definitionScalarFieldEnum: {
    readonly id: "id";
    readonly layer_name: "layer_name";
    readonly description: "description";
    readonly filter_rules: "filter_rules";
    readonly created_at: "created_at";
};
export type Data_layer_definitionScalarFieldEnum = (typeof Data_layer_definitionScalarFieldEnum)[keyof typeof Data_layer_definitionScalarFieldEnum];
export declare const Data_quality_flag_logScalarFieldEnum: {
    readonly id: "id";
    readonly rule_id: "rule_id";
    readonly customer_id: "customer_id";
    readonly flag_reason: "flag_reason";
    readonly resolved: "resolved";
    readonly resolved_by: "resolved_by";
    readonly resolved_at: "resolved_at";
    readonly flagged_at: "flagged_at";
};
export type Data_quality_flag_logScalarFieldEnum = (typeof Data_quality_flag_logScalarFieldEnum)[keyof typeof Data_quality_flag_logScalarFieldEnum];
export declare const Data_quality_ruleScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly rule_type: "rule_type";
    readonly conditions: "conditions";
    readonly severity: "severity";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Data_quality_ruleScalarFieldEnum = (typeof Data_quality_ruleScalarFieldEnum)[keyof typeof Data_quality_ruleScalarFieldEnum];
export declare const Dsr_requestScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly request_type: "request_type";
    readonly status: "status";
    readonly requested_at: "requested_at";
    readonly completed_at: "completed_at";
    readonly export_url: "export_url";
    readonly handled_by: "handled_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Dsr_requestScalarFieldEnum = (typeof Dsr_requestScalarFieldEnum)[keyof typeof Dsr_requestScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly anonymous_id: "anonymous_id";
    readonly event_type: "event_type";
    readonly properties: "properties";
    readonly context: "context";
    readonly idempotency_key: "idempotency_key";
    readonly source: "source";
    readonly occurred_at: "occurred_at";
    readonly received_at: "received_at";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const Expert_bookingScalarFieldEnum: {
    readonly id: "id";
    readonly slot_id: "slot_id";
    readonly customer_id: "customer_id";
    readonly baby_id: "baby_id";
    readonly status: "status";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Expert_bookingScalarFieldEnum = (typeof Expert_bookingScalarFieldEnum)[keyof typeof Expert_bookingScalarFieldEnum];
export declare const Expert_slotScalarFieldEnum: {
    readonly id: "id";
    readonly topic_id: "topic_id";
    readonly slot_date: "slot_date";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly max_bookings: "max_bookings";
    readonly current_bookings: "current_bookings";
    readonly created_at: "created_at";
};
export type Expert_slotScalarFieldEnum = (typeof Expert_slotScalarFieldEnum)[keyof typeof Expert_slotScalarFieldEnum];
export declare const Expert_topicScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly expert_name: "expert_name";
    readonly stage_codes: "stage_codes";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Expert_topicScalarFieldEnum = (typeof Expert_topicScalarFieldEnum)[keyof typeof Expert_topicScalarFieldEnum];
export declare const Frequency_counterScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly channel: "channel";
    readonly window_start: "window_start";
    readonly window_end: "window_end";
    readonly count: "count";
};
export type Frequency_counterScalarFieldEnum = (typeof Frequency_counterScalarFieldEnum)[keyof typeof Frequency_counterScalarFieldEnum];
export declare const Integration_jobScalarFieldEnum: {
    readonly id: "id";
    readonly job_type: "job_type";
    readonly status: "status";
    readonly input: "input";
    readonly output: "output";
    readonly error: "error";
    readonly started_at: "started_at";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
};
export type Integration_jobScalarFieldEnum = (typeof Integration_jobScalarFieldEnum)[keyof typeof Integration_jobScalarFieldEnum];
export declare const Journey_runScalarFieldEnum: {
    readonly id: "id";
    readonly journey_id: "journey_id";
    readonly customer_id: "customer_id";
    readonly current_node_id: "current_node_id";
    readonly status: "status";
    readonly entered_at: "entered_at";
    readonly exited_at: "exited_at";
    readonly exit_reason: "exit_reason";
    readonly journey_version: "journey_version";
    readonly context: "context";
};
export type Journey_runScalarFieldEnum = (typeof Journey_runScalarFieldEnum)[keyof typeof Journey_runScalarFieldEnum];
export declare const Journey_step_logScalarFieldEnum: {
    readonly id: "id";
    readonly journey_run_id: "journey_run_id";
    readonly node_id: "node_id";
    readonly node_type: "node_type";
    readonly action: "action";
    readonly result: "result";
    readonly executed_at: "executed_at";
};
export type Journey_step_logScalarFieldEnum = (typeof Journey_step_logScalarFieldEnum)[keyof typeof Journey_step_logScalarFieldEnum];
export declare const Kpi_daily_snapshotScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly total_customers: "total_customers";
    readonly new_customers: "new_customers";
    readonly active_customers: "active_customers";
    readonly total_orders: "total_orders";
    readonly total_revenue: "total_revenue";
    readonly avg_order_value: "avg_order_value";
    readonly messages_sent: "messages_sent";
    readonly messages_delivered: "messages_delivered";
    readonly points_issued: "points_issued";
    readonly points_redeemed: "points_redeemed";
    readonly created_at: "created_at";
};
export type Kpi_daily_snapshotScalarFieldEnum = (typeof Kpi_daily_snapshotScalarFieldEnum)[keyof typeof Kpi_daily_snapshotScalarFieldEnum];
export declare const Message_logScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly template_id: "template_id";
    readonly channel: "channel";
    readonly status: "status";
    readonly suppression_reason: "suppression_reason";
    readonly provider_message_id: "provider_message_id";
    readonly cost: "cost";
    readonly cost_currency: "cost_currency";
    readonly journey_run_id: "journey_run_id";
    readonly sent_at: "sent_at";
    readonly delivered_at: "delivered_at";
    readonly opened_at: "opened_at";
    readonly clicked_at: "clicked_at";
    readonly created_at: "created_at";
};
export type Message_logScalarFieldEnum = (typeof Message_logScalarFieldEnum)[keyof typeof Message_logScalarFieldEnum];
export declare const Milestone_definitionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly title: "title";
    readonly description: "description";
    readonly milestone_order: "milestone_order";
    readonly criteria: "criteria";
    readonly points_reward: "points_reward";
    readonly badge_image_url: "badge_image_url";
    readonly celebration_image_url: "celebration_image_url";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Milestone_definitionScalarFieldEnum = (typeof Milestone_definitionScalarFieldEnum)[keyof typeof Milestone_definitionScalarFieldEnum];
export declare const Milestone_progressScalarFieldEnum: {
    readonly id: "id";
    readonly milestone_id: "milestone_id";
    readonly customer_id: "customer_id";
    readonly baby_id: "baby_id";
    readonly progress_value: "progress_value";
    readonly is_completed: "is_completed";
    readonly completed_at: "completed_at";
    readonly points_awarded: "points_awarded";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Milestone_progressScalarFieldEnum = (typeof Milestone_progressScalarFieldEnum)[keyof typeof Milestone_progressScalarFieldEnum];
export declare const Points_liability_snapshotScalarFieldEnum: {
    readonly id: "id";
    readonly snapshot_date: "snapshot_date";
    readonly total_outstanding_points: "total_outstanding_points";
    readonly estimated_liability_vnd: "estimated_liability_vnd";
    readonly points_expiring_30d: "points_expiring_30d";
    readonly points_expiring_90d: "points_expiring_90d";
    readonly created_at: "created_at";
};
export type Points_liability_snapshotScalarFieldEnum = (typeof Points_liability_snapshotScalarFieldEnum)[keyof typeof Points_liability_snapshotScalarFieldEnum];
export declare const Product_purchase_cycleScalarFieldEnum: {
    readonly id: "id";
    readonly product_id: "product_id";
    readonly stage_code: "stage_code";
    readonly median_days: "median_days";
    readonly sample_count: "sample_count";
    readonly calculated_at: "calculated_at";
};
export type Product_purchase_cycleScalarFieldEnum = (typeof Product_purchase_cycleScalarFieldEnum)[keyof typeof Product_purchase_cycleScalarFieldEnum];
export declare const Product_serialScalarFieldEnum: {
    readonly id: "id";
    readonly serial_code: "serial_code";
    readonly batch_id: "batch_id";
    readonly product_id: "product_id";
    readonly status: "status";
    readonly claimed_by: "claimed_by";
    readonly claimed_at: "claimed_at";
    readonly created_at: "created_at";
};
export type Product_serialScalarFieldEnum = (typeof Product_serialScalarFieldEnum)[keyof typeof Product_serialScalarFieldEnum];
export declare const Quiz_definitionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly title: "title";
    readonly description: "description";
    readonly questions: "questions";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Quiz_definitionScalarFieldEnum = (typeof Quiz_definitionScalarFieldEnum)[keyof typeof Quiz_definitionScalarFieldEnum];
export declare const Quiz_responseScalarFieldEnum: {
    readonly id: "id";
    readonly quiz_id: "quiz_id";
    readonly customer_id: "customer_id";
    readonly anonymous_id: "anonymous_id";
    readonly answers: "answers";
    readonly result: "result";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
};
export type Quiz_responseScalarFieldEnum = (typeof Quiz_responseScalarFieldEnum)[keyof typeof Quiz_responseScalarFieldEnum];
export declare const Referral_codeScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly code: "code";
    readonly max_uses: "max_uses";
    readonly current_uses: "current_uses";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type Referral_codeScalarFieldEnum = (typeof Referral_codeScalarFieldEnum)[keyof typeof Referral_codeScalarFieldEnum];
export declare const Referral_conversionScalarFieldEnum: {
    readonly id: "id";
    readonly referral_code_id: "referral_code_id";
    readonly referrer_id: "referrer_id";
    readonly referred_id: "referred_id";
    readonly status: "status";
    readonly referrer_points: "referrer_points";
    readonly referred_points: "referred_points";
    readonly converted_at: "converted_at";
    readonly created_at: "created_at";
};
export type Referral_conversionScalarFieldEnum = (typeof Referral_conversionScalarFieldEnum)[keyof typeof Referral_conversionScalarFieldEnum];
export declare const Replenishment_scheduleScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly product_id: "product_id";
    readonly cycle_days: "cycle_days";
    readonly cycle_source: "cycle_source";
    readonly last_purchase_at: "last_purchase_at";
    readonly next_reminder_at: "next_reminder_at";
    readonly reminder_count: "reminder_count";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Replenishment_scheduleScalarFieldEnum = (typeof Replenishment_scheduleScalarFieldEnum)[keyof typeof Replenishment_scheduleScalarFieldEnum];
export declare const Rfm_snapshotScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly period: "period";
    readonly recency_score: "recency_score";
    readonly frequency_score: "frequency_score";
    readonly monetary_score: "monetary_score";
    readonly rfm_segment: "rfm_segment";
    readonly is_discount_hunter: "is_discount_hunter";
    readonly calculated_at: "calculated_at";
};
export type Rfm_snapshotScalarFieldEnum = (typeof Rfm_snapshotScalarFieldEnum)[keyof typeof Rfm_snapshotScalarFieldEnum];
export declare const Segment_membershipScalarFieldEnum: {
    readonly id: "id";
    readonly segment_id: "segment_id";
    readonly customer_id: "customer_id";
    readonly entered_at: "entered_at";
    readonly exited_at: "exited_at";
};
export type Segment_membershipScalarFieldEnum = (typeof Segment_membershipScalarFieldEnum)[keyof typeof Segment_membershipScalarFieldEnum];
export declare const Serial_batchScalarFieldEnum: {
    readonly id: "id";
    readonly batch_code: "batch_code";
    readonly product_id: "product_id";
    readonly quantity: "quantity";
    readonly manufactured_at: "manufactured_at";
    readonly expires_at: "expires_at";
    readonly created_at: "created_at";
};
export type Serial_batchScalarFieldEnum = (typeof Serial_batchScalarFieldEnum)[keyof typeof Serial_batchScalarFieldEnum];
export declare const Serial_scanScalarFieldEnum: {
    readonly id: "id";
    readonly serial_id: "serial_id";
    readonly customer_id: "customer_id";
    readonly scan_result: "scan_result";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly scanned_at: "scanned_at";
};
export type Serial_scanScalarFieldEnum = (typeof Serial_scanScalarFieldEnum)[keyof typeof Serial_scanScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly anonymous_id: "anonymous_id";
    readonly started_at: "started_at";
    readonly ended_at: "ended_at";
    readonly page_views: "page_views";
    readonly utm_source: "utm_source";
    readonly utm_medium: "utm_medium";
    readonly utm_campaign: "utm_campaign";
    readonly device_type: "device_type";
    readonly created_at: "created_at";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly status: "status";
    readonly frequency_days: "frequency_days";
    readonly next_delivery_date: "next_delivery_date";
    readonly payment_method_token: "payment_method_token";
    readonly payment_retry_count: "payment_retry_count";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const Subscription_deliveryScalarFieldEnum: {
    readonly id: "id";
    readonly subscription_id: "subscription_id";
    readonly order_id: "order_id";
    readonly scheduled_date: "scheduled_date";
    readonly status: "status";
    readonly delivered_at: "delivered_at";
    readonly created_at: "created_at";
};
export type Subscription_deliveryScalarFieldEnum = (typeof Subscription_deliveryScalarFieldEnum)[keyof typeof Subscription_deliveryScalarFieldEnum];
export declare const Subscription_itemScalarFieldEnum: {
    readonly id: "id";
    readonly subscription_id: "subscription_id";
    readonly product_id: "product_id";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
    readonly created_at: "created_at";
};
export type Subscription_itemScalarFieldEnum = (typeof Subscription_itemScalarFieldEnum)[keyof typeof Subscription_itemScalarFieldEnum];
export declare const Warranty_registrationScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly product_id: "product_id";
    readonly serial_id: "serial_id";
    readonly purchase_date: "purchase_date";
    readonly warranty_start: "warranty_start";
    readonly warranty_end: "warranty_end";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Warranty_registrationScalarFieldEnum = (typeof Warranty_registrationScalarFieldEnum)[keyof typeof Warranty_registrationScalarFieldEnum];
export declare const Webhook_inboxScalarFieldEnum: {
    readonly id: "id";
    readonly source: "source";
    readonly event_type: "event_type";
    readonly payload: "payload";
    readonly headers: "headers";
    readonly signature_valid: "signature_valid";
    readonly processed: "processed";
    readonly processed_at: "processed_at";
    readonly error: "error";
    readonly received_at: "received_at";
};
export type Webhook_inboxScalarFieldEnum = (typeof Webhook_inboxScalarFieldEnum)[keyof typeof Webhook_inboxScalarFieldEnum];
export declare const SystemConfigScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum];
export declare const DataHubScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly source: "source";
    readonly ownerId: "ownerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DataHubScalarFieldEnum = (typeof DataHubScalarFieldEnum)[keyof typeof DataHubScalarFieldEnum];
export declare const DynamicActionScalarFieldEnum: {
    readonly id: "id";
    readonly actionCode: "actionCode";
    readonly name: "name";
    readonly description: "description";
    readonly trigger: "trigger";
    readonly target: "target";
    readonly status: "status";
    readonly ownerId: "ownerId";
    readonly dataHubId: "dataHubId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DynamicActionScalarFieldEnum = (typeof DynamicActionScalarFieldEnum)[keyof typeof DynamicActionScalarFieldEnum];
export declare const DynamicActionPageScalarFieldEnum: {
    readonly id: "id";
    readonly actionId: "actionId";
    readonly pageOrder: "pageOrder";
    readonly title: "title";
    readonly headerConfig: "headerConfig";
    readonly actionConfig: "actionConfig";
    readonly dataHubTableId: "dataHubTableId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DynamicActionPageScalarFieldEnum = (typeof DynamicActionPageScalarFieldEnum)[keyof typeof DynamicActionPageScalarFieldEnum];
export declare const DynamicActionComponentScalarFieldEnum: {
    readonly id: "id";
    readonly pageId: "pageId";
    readonly componentOrder: "componentOrder";
    readonly type: "type";
    readonly label: "label";
    readonly placeholder: "placeholder";
    readonly required: "required";
    readonly options: "options";
    readonly validation: "validation";
    readonly dataHubColumnId: "dataHubColumnId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DynamicActionComponentScalarFieldEnum = (typeof DynamicActionComponentScalarFieldEnum)[keyof typeof DynamicActionComponentScalarFieldEnum];
export declare const DataHubTableScalarFieldEnum: {
    readonly id: "id";
    readonly dataHubId: "dataHubId";
    readonly name: "name";
};
export type DataHubTableScalarFieldEnum = (typeof DataHubTableScalarFieldEnum)[keyof typeof DataHubTableScalarFieldEnum];
export declare const DataHubColumnScalarFieldEnum: {
    readonly id: "id";
    readonly tableId: "tableId";
    readonly name: "name";
    readonly dataType: "dataType";
};
export type DataHubColumnScalarFieldEnum = (typeof DataHubColumnScalarFieldEnum)[keyof typeof DataHubColumnScalarFieldEnum];
export declare const DataHubRecordScalarFieldEnum: {
    readonly id: "id";
    readonly tableId: "tableId";
    readonly data: "data";
    readonly createdAt: "createdAt";
};
export type DataHubRecordScalarFieldEnum = (typeof DataHubRecordScalarFieldEnum)[keyof typeof DataHubRecordScalarFieldEnum];
export declare const ZaloOAScalarFieldEnum: {
    readonly id: "id";
    readonly oaId: "oaId";
    readonly name: "name";
    readonly description: "description";
    readonly avatarUrl: "avatarUrl";
    readonly packageName: "packageName";
    readonly followers: "followers";
    readonly status: "status";
    readonly expiryDate: "expiryDate";
    readonly ownerId: "ownerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ZaloOAScalarFieldEnum = (typeof ZaloOAScalarFieldEnum)[keyof typeof ZaloOAScalarFieldEnum];
export declare const ZaloMiniAppScalarFieldEnum: {
    readonly id: "id";
    readonly appId: "appId";
    readonly name: "name";
    readonly description: "description";
    readonly iconUrl: "iconUrl";
    readonly themeColor: "themeColor";
    readonly status: "status";
    readonly features: "features";
    readonly totalUsers: "totalUsers";
    readonly zaloOAId: "zaloOAId";
    readonly ownerId: "ownerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ZaloMiniAppScalarFieldEnum = (typeof ZaloMiniAppScalarFieldEnum)[keyof typeof ZaloMiniAppScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly subject: "subject";
    readonly category: "category";
    readonly status: "status";
    readonly messages: "messages";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const CustomerDeviceScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly deviceType: "deviceType";
    readonly browser: "browser";
    readonly os: "os";
    readonly userAgent: "userAgent";
    readonly lastLogin: "lastLogin";
    readonly createdAt: "createdAt";
};
export type CustomerDeviceScalarFieldEnum = (typeof CustomerDeviceScalarFieldEnum)[keyof typeof CustomerDeviceScalarFieldEnum];
export declare const AdminNotificationScalarFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly title: "title";
    readonly body: "body";
    readonly link: "link";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type AdminNotificationScalarFieldEnum = (typeof AdminNotificationScalarFieldEnum)[keyof typeof AdminNotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    customer?: Prisma.CustomerOmit;
    customerIdentity?: Prisma.CustomerIdentityOmit;
    mergeCandidate?: Prisma.MergeCandidateOmit;
    customerAddress?: Prisma.CustomerAddressOmit;
    customerTag?: Prisma.CustomerTagOmit;
    baby?: Prisma.BabyOmit;
    babyGrowthLog?: Prisma.BabyGrowthLogOmit;
    babyStageHistory?: Prisma.BabyStageHistoryOmit;
    consentDocumentVersion?: Prisma.ConsentDocumentVersionOmit;
    consent?: Prisma.ConsentOmit;
    product?: Prisma.ProductOmit;
    productLifecycleRule?: Prisma.ProductLifecycleRuleOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    productExchange?: Prisma.ProductExchangeOmit;
    review?: Prisma.ReviewOmit;
    loyaltyTierConfig?: Prisma.LoyaltyTierConfigOmit;
    loyaltyAccount?: Prisma.LoyaltyAccountOmit;
    loyaltyTransaction?: Prisma.LoyaltyTransactionOmit;
    loyaltyEarnRule?: Prisma.LoyaltyEarnRuleOmit;
    rewardCatalog?: Prisma.RewardCatalogOmit;
    rewardRedemption?: Prisma.RewardRedemptionOmit;
    segment?: Prisma.SegmentOmit;
    journey?: Prisma.JourneyOmit;
    messageTemplate?: Prisma.MessageTemplateOmit;
    role?: Prisma.RoleOmit;
    adminUser?: Prisma.AdminUserOmit;
    auditLog?: Prisma.AuditLogOmit;
    campaign_control_group?: Prisma.campaign_control_groupOmit;
    checklist_definition?: Prisma.checklist_definitionOmit;
    checklist_progress?: Prisma.checklist_progressOmit;
    customer_metrics_daily?: Prisma.customer_metrics_dailyOmit;
    data_layer_definition?: Prisma.data_layer_definitionOmit;
    data_quality_flag_log?: Prisma.data_quality_flag_logOmit;
    data_quality_rule?: Prisma.data_quality_ruleOmit;
    dsr_request?: Prisma.dsr_requestOmit;
    event?: Prisma.eventOmit;
    expert_booking?: Prisma.expert_bookingOmit;
    expert_slot?: Prisma.expert_slotOmit;
    expert_topic?: Prisma.expert_topicOmit;
    frequency_counter?: Prisma.frequency_counterOmit;
    integration_job?: Prisma.integration_jobOmit;
    journey_run?: Prisma.journey_runOmit;
    journey_step_log?: Prisma.journey_step_logOmit;
    kpi_daily_snapshot?: Prisma.kpi_daily_snapshotOmit;
    message_log?: Prisma.message_logOmit;
    milestone_definition?: Prisma.milestone_definitionOmit;
    milestone_progress?: Prisma.milestone_progressOmit;
    points_liability_snapshot?: Prisma.points_liability_snapshotOmit;
    product_purchase_cycle?: Prisma.product_purchase_cycleOmit;
    product_serial?: Prisma.product_serialOmit;
    quiz_definition?: Prisma.quiz_definitionOmit;
    quiz_response?: Prisma.quiz_responseOmit;
    referral_code?: Prisma.referral_codeOmit;
    referral_conversion?: Prisma.referral_conversionOmit;
    replenishment_schedule?: Prisma.replenishment_scheduleOmit;
    rfm_snapshot?: Prisma.rfm_snapshotOmit;
    segment_membership?: Prisma.segment_membershipOmit;
    serial_batch?: Prisma.serial_batchOmit;
    serial_scan?: Prisma.serial_scanOmit;
    session?: Prisma.sessionOmit;
    subscription?: Prisma.subscriptionOmit;
    subscription_delivery?: Prisma.subscription_deliveryOmit;
    subscription_item?: Prisma.subscription_itemOmit;
    warranty_registration?: Prisma.warranty_registrationOmit;
    webhook_inbox?: Prisma.webhook_inboxOmit;
    systemConfig?: Prisma.SystemConfigOmit;
    dataHub?: Prisma.DataHubOmit;
    dynamicAction?: Prisma.DynamicActionOmit;
    dynamicActionPage?: Prisma.DynamicActionPageOmit;
    dynamicActionComponent?: Prisma.DynamicActionComponentOmit;
    dataHubTable?: Prisma.DataHubTableOmit;
    dataHubColumn?: Prisma.DataHubColumnOmit;
    dataHubRecord?: Prisma.DataHubRecordOmit;
    zaloOA?: Prisma.ZaloOAOmit;
    zaloMiniApp?: Prisma.ZaloMiniAppOmit;
    supportTicket?: Prisma.SupportTicketOmit;
    customerDevice?: Prisma.CustomerDeviceOmit;
    adminNotification?: Prisma.AdminNotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
