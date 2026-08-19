"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration_jobScalarFieldEnum = exports.Frequency_counterScalarFieldEnum = exports.Expert_topicScalarFieldEnum = exports.Expert_slotScalarFieldEnum = exports.Expert_bookingScalarFieldEnum = exports.EventScalarFieldEnum = exports.Dsr_requestScalarFieldEnum = exports.Data_quality_ruleScalarFieldEnum = exports.Data_quality_flag_logScalarFieldEnum = exports.ConditionDefinitionScalarFieldEnum = exports.Data_layer_definitionScalarFieldEnum = exports.Customer_metrics_dailyScalarFieldEnum = exports.Checklist_progressScalarFieldEnum = exports.Checklist_definitionScalarFieldEnum = exports.Campaign_control_groupScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.AdminUserScalarFieldEnum = exports.RoleScalarFieldEnum = exports.MessageTemplateScalarFieldEnum = exports.JourneyScalarFieldEnum = exports.SegmentScalarFieldEnum = exports.RewardRedemptionScalarFieldEnum = exports.RewardCatalogScalarFieldEnum = exports.LoyaltyEarnRuleScalarFieldEnum = exports.LoyaltyTransactionScalarFieldEnum = exports.LoyaltyAccountScalarFieldEnum = exports.LoyaltyTierConfigScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.ProductExchangeScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.ProductLifecycleRuleScalarFieldEnum = exports.ProductScalarFieldEnum = exports.ConsentScalarFieldEnum = exports.ConsentDocumentVersionScalarFieldEnum = exports.BabyStageHistoryScalarFieldEnum = exports.BabyGrowthLogScalarFieldEnum = exports.BabyScalarFieldEnum = exports.CustomerTagScalarFieldEnum = exports.CustomerAddressScalarFieldEnum = exports.MergeCandidateScalarFieldEnum = exports.CustomerIdentityScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AdminNotificationScalarFieldEnum = exports.CustomerDeviceScalarFieldEnum = exports.SupportTicketScalarFieldEnum = exports.ZaloMiniAppScalarFieldEnum = exports.ZaloOAScalarFieldEnum = exports.DynamicActionScalarFieldEnum = exports.SystemConfigScalarFieldEnum = exports.Webhook_inboxScalarFieldEnum = exports.Warranty_registrationScalarFieldEnum = exports.Subscription_itemScalarFieldEnum = exports.Subscription_deliveryScalarFieldEnum = exports.SubscriptionScalarFieldEnum = exports.SessionScalarFieldEnum = exports.Serial_scanScalarFieldEnum = exports.Serial_batchScalarFieldEnum = exports.Segment_membershipScalarFieldEnum = exports.Rfm_snapshotScalarFieldEnum = exports.Replenishment_scheduleScalarFieldEnum = exports.Referral_conversionScalarFieldEnum = exports.Referral_codeScalarFieldEnum = exports.Quiz_responseScalarFieldEnum = exports.Quiz_definitionScalarFieldEnum = exports.Product_serialScalarFieldEnum = exports.Product_purchase_cycleScalarFieldEnum = exports.Points_liability_snapshotScalarFieldEnum = exports.Milestone_progressScalarFieldEnum = exports.Milestone_definitionScalarFieldEnum = exports.Message_logScalarFieldEnum = exports.Kpi_daily_snapshotScalarFieldEnum = exports.Journey_step_logScalarFieldEnum = exports.Journey_runScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Customer: 'Customer',
    CustomerIdentity: 'CustomerIdentity',
    MergeCandidate: 'MergeCandidate',
    CustomerAddress: 'CustomerAddress',
    CustomerTag: 'CustomerTag',
    Baby: 'Baby',
    BabyGrowthLog: 'BabyGrowthLog',
    BabyStageHistory: 'BabyStageHistory',
    ConsentDocumentVersion: 'ConsentDocumentVersion',
    Consent: 'Consent',
    Product: 'Product',
    ProductLifecycleRule: 'ProductLifecycleRule',
    Order: 'Order',
    OrderItem: 'OrderItem',
    ProductExchange: 'ProductExchange',
    Review: 'Review',
    LoyaltyTierConfig: 'LoyaltyTierConfig',
    LoyaltyAccount: 'LoyaltyAccount',
    LoyaltyTransaction: 'LoyaltyTransaction',
    LoyaltyEarnRule: 'LoyaltyEarnRule',
    RewardCatalog: 'RewardCatalog',
    RewardRedemption: 'RewardRedemption',
    Segment: 'Segment',
    Journey: 'Journey',
    MessageTemplate: 'MessageTemplate',
    Role: 'Role',
    AdminUser: 'AdminUser',
    AuditLog: 'AuditLog',
    campaign_control_group: 'campaign_control_group',
    checklist_definition: 'checklist_definition',
    checklist_progress: 'checklist_progress',
    customer_metrics_daily: 'customer_metrics_daily',
    data_layer_definition: 'data_layer_definition',
    ConditionDefinition: 'ConditionDefinition',
    data_quality_flag_log: 'data_quality_flag_log',
    data_quality_rule: 'data_quality_rule',
    dsr_request: 'dsr_request',
    event: 'event',
    expert_booking: 'expert_booking',
    expert_slot: 'expert_slot',
    expert_topic: 'expert_topic',
    frequency_counter: 'frequency_counter',
    integration_job: 'integration_job',
    journey_run: 'journey_run',
    journey_step_log: 'journey_step_log',
    kpi_daily_snapshot: 'kpi_daily_snapshot',
    message_log: 'message_log',
    milestone_definition: 'milestone_definition',
    milestone_progress: 'milestone_progress',
    points_liability_snapshot: 'points_liability_snapshot',
    product_purchase_cycle: 'product_purchase_cycle',
    product_serial: 'product_serial',
    quiz_definition: 'quiz_definition',
    quiz_response: 'quiz_response',
    referral_code: 'referral_code',
    referral_conversion: 'referral_conversion',
    replenishment_schedule: 'replenishment_schedule',
    rfm_snapshot: 'rfm_snapshot',
    segment_membership: 'segment_membership',
    serial_batch: 'serial_batch',
    serial_scan: 'serial_scan',
    session: 'session',
    subscription: 'subscription',
    subscription_delivery: 'subscription_delivery',
    subscription_item: 'subscription_item',
    warranty_registration: 'warranty_registration',
    webhook_inbox: 'webhook_inbox',
    SystemConfig: 'SystemConfig',
    DynamicAction: 'DynamicAction',
    ZaloOA: 'ZaloOA',
    ZaloMiniApp: 'ZaloMiniApp',
    SupportTicket: 'SupportTicket',
    CustomerDevice: 'CustomerDevice',
    AdminNotification: 'AdminNotification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.CustomerScalarFieldEnum = {
    id: 'id',
    customerCode: 'customerCode',
    phone: 'phone',
    email: 'email',
    fullName: 'fullName',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    avatarUrl: 'avatarUrl',
    registrationSource: 'registrationSource',
    customerType: 'customerType',
    dmsCode: 'dmsCode',
    notes: 'notes',
    dataQualityFlag: 'dataQualityFlag',
    isMerged: 'isMerged',
    isActive: 'isActive',
    mergedIntoId: 'mergedIntoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pinCode: 'pinCode'
};
exports.CustomerIdentityScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    identityType: 'identityType',
    identityValue: 'identityValue',
    priority: 'priority',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
};
exports.MergeCandidateScalarFieldEnum = {
    id: 'id',
    customerIdA: 'customerIdA',
    customerIdB: 'customerIdB',
    matchReason: 'matchReason',
    confidenceScore: 'confidenceScore',
    status: 'status',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt'
};
exports.CustomerAddressScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    label: 'label',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    ward: 'ward',
    district: 'district',
    province: 'province',
    country: 'country',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CustomerTagScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    tag: 'tag',
    source: 'source',
    createdAt: 'createdAt'
};
exports.BabyScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    name: 'name',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    dueDate: 'dueDate',
    isBorn: 'isBorn',
    stageCode: 'stageCode',
    feedingType: 'feedingType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BabyGrowthLogScalarFieldEnum = {
    id: 'id',
    babyId: 'babyId',
    recordedAt: 'recordedAt',
    weightKg: 'weightKg',
    heightCm: 'heightCm',
    headCircumferenceCm: 'headCircumferenceCm',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.BabyStageHistoryScalarFieldEnum = {
    id: 'id',
    babyId: 'babyId',
    stageCode: 'stageCode',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt'
};
exports.ConsentDocumentVersionScalarFieldEnum = {
    id: 'id',
    documentType: 'documentType',
    version: 'version',
    contentUrl: 'contentUrl',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.ConsentScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    channel: 'channel',
    status: 'status',
    documentVersionId: 'documentVersionId',
    grantedAt: 'grantedAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    wooProductId: 'wooProductId',
    name: 'name',
    category: 'category',
    subcategory: 'subcategory',
    brand: 'brand',
    stageCodes: 'stageCodes',
    price: 'price',
    isGwp: 'isGwp',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductLifecycleRuleScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    stageCode: 'stageCode',
    replaceDays: 'replaceDays',
    usageUnit: 'usageUnit',
    usageQuantity: 'usageQuantity',
    createdAt: 'createdAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    wooOrderId: 'wooOrderId',
    orderNumber: 'orderNumber',
    status: 'status',
    totalAmount: 'totalAmount',
    discountAmount: 'discountAmount',
    netAmount: 'netAmount',
    currency: 'currency',
    channel: 'channel',
    isGwp: 'isGwp',
    isInternal: 'isInternal',
    shipmentNo: 'shipmentNo',
    trackingLink: 'trackingLink',
    orderedAt: 'orderedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    sku: 'sku',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt'
};
exports.ProductExchangeScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    originalOrderId: 'originalOrderId',
    originalProductId: 'originalProductId',
    newProductId: 'newProductId',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    productId: 'productId',
    orderId: 'orderId',
    rating: 'rating',
    content: 'content',
    isVerifiedPurchase: 'isVerifiedPurchase',
    status: 'status',
    createdAt: 'createdAt'
};
exports.LoyaltyTierConfigScalarFieldEnum = {
    id: 'id',
    tierCode: 'tierCode',
    tierName: 'tierName',
    tierOrder: 'tierOrder',
    minNetSpend: 'minNetSpend',
    minDistinctMonths: 'minDistinctMonths',
    pointsMultiplier: 'pointsMultiplier',
    benefits: 'benefits',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LoyaltyAccountScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    tierId: 'tierId',
    pointsBalance: 'pointsBalance',
    pointsLifetime: 'pointsLifetime',
    pointsRedeemed: 'pointsRedeemed',
    pointsExpired: 'pointsExpired',
    netSpend: 'netSpend',
    distinctOrderMonths: 'distinctOrderMonths',
    tierEvaluatedAt: 'tierEvaluatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LoyaltyTransactionScalarFieldEnum = {
    id: 'id',
    loyaltyAccountId: 'loyaltyAccountId',
    customerId: 'customerId',
    type: 'type',
    source: 'source',
    points: 'points',
    balanceAfter: 'balanceAfter',
    referenceType: 'referenceType',
    referenceId: 'referenceId',
    description: 'description',
    expiresAt: 'expiresAt',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt'
};
exports.LoyaltyEarnRuleScalarFieldEnum = {
    id: 'id',
    source: 'source',
    ruleName: 'ruleName',
    pointsFormula: 'pointsFormula',
    conditions: 'conditions',
    tierMultiplierApplies: 'tierMultiplierApplies',
    isActive: 'isActive',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    createdAt: 'createdAt'
};
exports.RewardCatalogScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    category: 'category',
    pointsCost: 'pointsCost',
    stock: 'stock',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RewardRedemptionScalarFieldEnum = {
    id: 'id',
    loyaltyAccountId: 'loyaltyAccountId',
    customerId: 'customerId',
    rewardId: 'rewardId',
    pointsSpent: 'pointsSpent',
    status: 'status',
    shipmentNo: 'shipmentNo',
    trackingLink: 'trackingLink',
    fulfilledAt: 'fulfilledAt',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SegmentScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    rules: 'rules',
    refreshMode: 'refreshMode',
    isSystem: 'isSystem',
    isActive: 'isActive',
    memberCount: 'memberCount',
    lastEvaluatedAt: 'lastEvaluatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.JourneyScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    graph: 'graph',
    triggerEvent: 'triggerEvent',
    triggerSegmentId: 'triggerSegmentId',
    entryConditions: 'entryConditions',
    exitConditions: 'exitConditions',
    version: 'version',
    status: 'status',
    hasControlGroup: 'hasControlGroup',
    controlGroupPct: 'controlGroupPct',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MessageTemplateScalarFieldEnum = {
    id: 'id',
    code: 'code',
    channel: 'channel',
    name: 'name',
    subject: 'subject',
    body: 'body',
    variables: 'variables',
    providerTemplateId: 'providerTemplateId',
    approvalStatus: 'approvalStatus',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    permissions: 'permissions',
    createdAt: 'createdAt'
};
exports.AdminUserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    roleId: 'roleId',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    adminUserId: 'adminUserId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    oldValues: 'oldValues',
    newValues: 'newValues',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.Campaign_control_groupScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    journey_id: 'journey_id',
    group: 'group',
    assigned_at: 'assigned_at'
};
exports.Checklist_definitionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    title: 'title',
    stage_code: 'stage_code',
    items: 'items',
    points_reward: 'points_reward',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Checklist_progressScalarFieldEnum = {
    id: 'id',
    checklist_id: 'checklist_id',
    customer_id: 'customer_id',
    baby_id: 'baby_id',
    completed_items: 'completed_items',
    is_completed: 'is_completed',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Customer_metrics_dailyScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    date: 'date',
    total_orders: 'total_orders',
    total_revenue: 'total_revenue',
    total_items: 'total_items',
    page_views: 'page_views',
    sessions: 'sessions',
    points_earned: 'points_earned',
    points_spent: 'points_spent',
    created_at: 'created_at'
};
exports.Data_layer_definitionScalarFieldEnum = {
    id: 'id',
    layer_name: 'layer_name',
    description: 'description',
    filter_rules: 'filter_rules',
    created_at: 'created_at'
};
exports.ConditionDefinitionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    source: 'source',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.Data_quality_flag_logScalarFieldEnum = {
    id: 'id',
    rule_id: 'rule_id',
    customer_id: 'customer_id',
    flag_reason: 'flag_reason',
    resolved: 'resolved',
    resolved_by: 'resolved_by',
    resolved_at: 'resolved_at',
    flagged_at: 'flagged_at'
};
exports.Data_quality_ruleScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    rule_type: 'rule_type',
    conditions: 'conditions',
    severity: 'severity',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Dsr_requestScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    request_type: 'request_type',
    status: 'status',
    requested_at: 'requested_at',
    completed_at: 'completed_at',
    export_url: 'export_url',
    handled_by: 'handled_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.EventScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    anonymous_id: 'anonymous_id',
    event_type: 'event_type',
    properties: 'properties',
    context: 'context',
    idempotency_key: 'idempotency_key',
    source: 'source',
    occurred_at: 'occurred_at',
    received_at: 'received_at'
};
exports.Expert_bookingScalarFieldEnum = {
    id: 'id',
    slot_id: 'slot_id',
    customer_id: 'customer_id',
    baby_id: 'baby_id',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Expert_slotScalarFieldEnum = {
    id: 'id',
    topic_id: 'topic_id',
    slot_date: 'slot_date',
    start_time: 'start_time',
    end_time: 'end_time',
    max_bookings: 'max_bookings',
    current_bookings: 'current_bookings',
    created_at: 'created_at'
};
exports.Expert_topicScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    expert_name: 'expert_name',
    stage_codes: 'stage_codes',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Frequency_counterScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    channel: 'channel',
    window_start: 'window_start',
    window_end: 'window_end',
    count: 'count'
};
exports.Integration_jobScalarFieldEnum = {
    id: 'id',
    job_type: 'job_type',
    status: 'status',
    input: 'input',
    output: 'output',
    error: 'error',
    started_at: 'started_at',
    completed_at: 'completed_at',
    created_at: 'created_at'
};
exports.Journey_runScalarFieldEnum = {
    id: 'id',
    journey_id: 'journey_id',
    customer_id: 'customer_id',
    current_node_id: 'current_node_id',
    status: 'status',
    entered_at: 'entered_at',
    exited_at: 'exited_at',
    exit_reason: 'exit_reason',
    journey_version: 'journey_version',
    context: 'context'
};
exports.Journey_step_logScalarFieldEnum = {
    id: 'id',
    journey_run_id: 'journey_run_id',
    node_id: 'node_id',
    node_type: 'node_type',
    action: 'action',
    result: 'result',
    executed_at: 'executed_at'
};
exports.Kpi_daily_snapshotScalarFieldEnum = {
    id: 'id',
    date: 'date',
    total_customers: 'total_customers',
    new_customers: 'new_customers',
    active_customers: 'active_customers',
    total_orders: 'total_orders',
    total_revenue: 'total_revenue',
    avg_order_value: 'avg_order_value',
    messages_sent: 'messages_sent',
    messages_delivered: 'messages_delivered',
    points_issued: 'points_issued',
    points_redeemed: 'points_redeemed',
    created_at: 'created_at'
};
exports.Message_logScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    template_id: 'template_id',
    channel: 'channel',
    status: 'status',
    suppression_reason: 'suppression_reason',
    provider_message_id: 'provider_message_id',
    cost: 'cost',
    cost_currency: 'cost_currency',
    journey_run_id: 'journey_run_id',
    sent_at: 'sent_at',
    delivered_at: 'delivered_at',
    opened_at: 'opened_at',
    clicked_at: 'clicked_at',
    created_at: 'created_at'
};
exports.Milestone_definitionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    milestone_order: 'milestone_order',
    criteria: 'criteria',
    points_reward: 'points_reward',
    badge_image_url: 'badge_image_url',
    celebration_image_url: 'celebration_image_url',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Milestone_progressScalarFieldEnum = {
    id: 'id',
    milestone_id: 'milestone_id',
    customer_id: 'customer_id',
    baby_id: 'baby_id',
    progress_value: 'progress_value',
    is_completed: 'is_completed',
    completed_at: 'completed_at',
    points_awarded: 'points_awarded',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Points_liability_snapshotScalarFieldEnum = {
    id: 'id',
    snapshot_date: 'snapshot_date',
    total_outstanding_points: 'total_outstanding_points',
    estimated_liability_vnd: 'estimated_liability_vnd',
    points_expiring_30d: 'points_expiring_30d',
    points_expiring_90d: 'points_expiring_90d',
    created_at: 'created_at'
};
exports.Product_purchase_cycleScalarFieldEnum = {
    id: 'id',
    product_id: 'product_id',
    stage_code: 'stage_code',
    median_days: 'median_days',
    sample_count: 'sample_count',
    calculated_at: 'calculated_at'
};
exports.Product_serialScalarFieldEnum = {
    id: 'id',
    serial_code: 'serial_code',
    batch_id: 'batch_id',
    product_id: 'product_id',
    status: 'status',
    claimed_by: 'claimed_by',
    claimed_at: 'claimed_at',
    created_at: 'created_at'
};
exports.Quiz_definitionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    questions: 'questions',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Quiz_responseScalarFieldEnum = {
    id: 'id',
    quiz_id: 'quiz_id',
    customer_id: 'customer_id',
    anonymous_id: 'anonymous_id',
    answers: 'answers',
    result: 'result',
    completed_at: 'completed_at',
    created_at: 'created_at'
};
exports.Referral_codeScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    code: 'code',
    max_uses: 'max_uses',
    current_uses: 'current_uses',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Referral_conversionScalarFieldEnum = {
    id: 'id',
    referral_code_id: 'referral_code_id',
    referrer_id: 'referrer_id',
    referred_id: 'referred_id',
    status: 'status',
    referrer_points: 'referrer_points',
    referred_points: 'referred_points',
    converted_at: 'converted_at',
    created_at: 'created_at'
};
exports.Replenishment_scheduleScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    product_id: 'product_id',
    cycle_days: 'cycle_days',
    cycle_source: 'cycle_source',
    last_purchase_at: 'last_purchase_at',
    next_reminder_at: 'next_reminder_at',
    reminder_count: 'reminder_count',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Rfm_snapshotScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    period: 'period',
    recency_score: 'recency_score',
    frequency_score: 'frequency_score',
    monetary_score: 'monetary_score',
    rfm_segment: 'rfm_segment',
    is_discount_hunter: 'is_discount_hunter',
    calculated_at: 'calculated_at'
};
exports.Segment_membershipScalarFieldEnum = {
    id: 'id',
    segment_id: 'segment_id',
    customer_id: 'customer_id',
    entered_at: 'entered_at',
    exited_at: 'exited_at'
};
exports.Serial_batchScalarFieldEnum = {
    id: 'id',
    batch_code: 'batch_code',
    product_id: 'product_id',
    quantity: 'quantity',
    manufactured_at: 'manufactured_at',
    expires_at: 'expires_at',
    created_at: 'created_at'
};
exports.Serial_scanScalarFieldEnum = {
    id: 'id',
    serial_id: 'serial_id',
    customer_id: 'customer_id',
    scan_result: 'scan_result',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    scanned_at: 'scanned_at'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    anonymous_id: 'anonymous_id',
    started_at: 'started_at',
    ended_at: 'ended_at',
    page_views: 'page_views',
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    device_type: 'device_type',
    created_at: 'created_at'
};
exports.SubscriptionScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    status: 'status',
    frequency_days: 'frequency_days',
    next_delivery_date: 'next_delivery_date',
    payment_method_token: 'payment_method_token',
    payment_retry_count: 'payment_retry_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Subscription_deliveryScalarFieldEnum = {
    id: 'id',
    subscription_id: 'subscription_id',
    order_id: 'order_id',
    scheduled_date: 'scheduled_date',
    status: 'status',
    delivered_at: 'delivered_at',
    created_at: 'created_at'
};
exports.Subscription_itemScalarFieldEnum = {
    id: 'id',
    subscription_id: 'subscription_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    created_at: 'created_at'
};
exports.Warranty_registrationScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    product_id: 'product_id',
    serial_id: 'serial_id',
    purchase_date: 'purchase_date',
    warranty_start: 'warranty_start',
    warranty_end: 'warranty_end',
    status: 'status',
    created_at: 'created_at'
};
exports.Webhook_inboxScalarFieldEnum = {
    id: 'id',
    source: 'source',
    event_type: 'event_type',
    payload: 'payload',
    headers: 'headers',
    signature_valid: 'signature_valid',
    processed: 'processed',
    processed_at: 'processed_at',
    error: 'error',
    received_at: 'received_at'
};
exports.SystemConfigScalarFieldEnum = {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DynamicActionScalarFieldEnum = {
    id: 'id',
    actionCode: 'actionCode',
    name: 'name',
    description: 'description',
    trigger: 'trigger',
    target: 'target',
    status: 'status',
    ownerId: 'ownerId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ZaloOAScalarFieldEnum = {
    id: 'id',
    oaId: 'oaId',
    name: 'name',
    description: 'description',
    avatarUrl: 'avatarUrl',
    packageName: 'packageName',
    followers: 'followers',
    status: 'status',
    expiryDate: 'expiryDate',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ZaloMiniAppScalarFieldEnum = {
    id: 'id',
    appId: 'appId',
    name: 'name',
    description: 'description',
    iconUrl: 'iconUrl',
    themeColor: 'themeColor',
    status: 'status',
    features: 'features',
    totalUsers: 'totalUsers',
    zaloOAId: 'zaloOAId',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SupportTicketScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    subject: 'subject',
    category: 'category',
    status: 'status',
    messages: 'messages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CustomerDeviceScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    deviceType: 'deviceType',
    browser: 'browser',
    os: 'os',
    userAgent: 'userAgent',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt'
};
exports.AdminNotificationScalarFieldEnum = {
    id: 'id',
    category: 'category',
    title: 'title',
    body: 'body',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map