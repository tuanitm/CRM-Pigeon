"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
let PrismaService = class PrismaService {
    _client;
    constructor() {
        const adapter = new adapter_pg_1.PrismaPg({
            connectionString: process.env.DATABASE_URL,
        });
        this._client = new client_1.PrismaClient({
            adapter,
            log: process.env.APP_ENV === 'development'
                ? ['query', 'info', 'warn', 'error']
                : ['warn', 'error'],
        });
        return new Proxy(this, {
            get: (target, prop, receiver) => {
                if (prop in target) {
                    return Reflect.get(target, prop, receiver);
                }
                return target._client[prop];
            },
        });
    }
    async onModuleInit() {
        await this._client.$connect();
    }
    async onModuleDestroy() {
        await this._client.$disconnect();
    }
    get customer() { return this._client.customer; }
    get customerIdentity() { return this._client.customerIdentity; }
    get mergeCandidate() { return this._client.mergeCandidate; }
    get customerAddress() { return this._client.customerAddress; }
    get customerTag() { return this._client.customerTag; }
    get baby() { return this._client.baby; }
    get babyGrowthLog() { return this._client.babyGrowthLog; }
    get babyStageHistory() { return this._client.babyStageHistory; }
    get consent() { return this._client.consent; }
    get consentDocumentVersion() { return this._client.consentDocumentVersion; }
    get product() { return this._client.product; }
    get productLifecycleRule() { return this._client.productLifecycleRule; }
    get order() { return this._client.order; }
    get orderItem() { return this._client.orderItem; }
    get productExchange() { return this._client.productExchange; }
    get review() { return this._client.review; }
    get loyaltyTierConfig() { return this._client.loyaltyTierConfig; }
    get loyaltyAccount() { return this._client.loyaltyAccount; }
    get loyaltyTransaction() { return this._client.loyaltyTransaction; }
    get loyaltyEarnRule() { return this._client.loyaltyEarnRule; }
    get rewardCatalog() { return this._client.rewardCatalog; }
    get rewardRedemption() { return this._client.rewardRedemption; }
    get segment() { return this._client.segment; }
    get journey() { return this._client.journey; }
    get messageTemplate() { return this._client.messageTemplate; }
    get role() { return this._client.role; }
    get adminUser() { return this._client.adminUser; }
    get auditLog() { return this._client.auditLog; }
    get systemConfig() { return this._client.systemConfig; }
    get campaign_control_group() { return this._client.campaign_control_group; }
    get checklist_definition() { return this._client.checklist_definition; }
    get checklist_progress() { return this._client.checklist_progress; }
    get customer_metrics_daily() { return this._client.customer_metrics_daily; }
    get data_layer_definition() { return this._client.data_layer_definition; }
    get data_quality_flag_log() { return this._client.data_quality_flag_log; }
    get data_quality_rule() { return this._client.data_quality_rule; }
    get dsr_request() { return this._client.dsr_request; }
    get event() { return this._client.event; }
    get expert_booking() { return this._client.expert_booking; }
    get expert_slot() { return this._client.expert_slot; }
    get expert_topic() { return this._client.expert_topic; }
    get frequency_counter() { return this._client.frequency_counter; }
    get integration_job() { return this._client.integration_job; }
    get journey_run() { return this._client.journey_run; }
    get journey_step_log() { return this._client.journey_step_log; }
    get kpi_daily_snapshot() { return this._client.kpi_daily_snapshot; }
    get message_log() { return this._client.message_log; }
    get milestone_definition() { return this._client.milestone_definition; }
    get milestone_progress() { return this._client.milestone_progress; }
    get points_liability_snapshot() { return this._client.points_liability_snapshot; }
    get product_purchase_cycle() { return this._client.product_purchase_cycle; }
    get product_serial() { return this._client.product_serial; }
    get quiz_definition() { return this._client.quiz_definition; }
    get quiz_response() { return this._client.quiz_response; }
    get referral_code() { return this._client.referral_code; }
    get referral_conversion() { return this._client.referral_conversion; }
    get replenishment_schedule() { return this._client.replenishment_schedule; }
    get rfm_snapshot() { return this._client.rfm_snapshot; }
    get segment_membership() { return this._client.segment_membership; }
    get serial_batch() { return this._client.serial_batch; }
    get serial_scan() { return this._client.serial_scan; }
    get session() { return this._client.session; }
    get subscription() { return this._client.subscription; }
    get subscription_delivery() { return this._client.subscription_delivery; }
    get subscription_item() { return this._client.subscription_item; }
    get warranty_registration() { return this._client.warranty_registration; }
    get webhook_inbox() { return this._client.webhook_inbox; }
    get $executeRaw() { return this._client.$executeRaw.bind(this._client); }
    get $queryRaw() { return this._client.$queryRaw.bind(this._client); }
    get $transaction() { return this._client.$transaction.bind(this._client); }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map