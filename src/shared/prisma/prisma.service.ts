import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private _client: InstanceType<typeof PrismaClient>;

  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    this._client = new PrismaClient({
      adapter,
      log: process.env.APP_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['warn', 'error'],
    });

    // Proxy all PrismaClient properties to this service
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        return (target._client as any)[prop];
      },
    });
  }

  async onModuleInit() {
    await this._client.$connect();
  }

  async onModuleDestroy() {
    await this._client.$disconnect();
  }

  // Expose commonly used methods directly for type safety
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

  // Data Hub & Dynamic Action models
  get dataHub() { return this._client.dataHub; }
  get dataHubTable() { return this._client.dataHubTable; }
  get dataHubColumn() { return this._client.dataHubColumn; }
  get dataHubRecord() { return this._client.dataHubRecord; }
  get dynamicAction() { return this._client.dynamicAction; }
  get dynamicActionPage() { return this._client.dynamicActionPage; }
  get dynamicActionComponent() { return this._client.dynamicActionComponent; }
  get zaloOA() { return this._client.zaloOA; }
  get zaloMiniApp() { return this._client.zaloMiniApp; }

  // Models with snake_case names (from db pull)
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
  get supportTicket() { return this._client.supportTicket; }
  get customerDevice() { return this._client.customerDevice; }
  get adminNotification() { return this._client.adminNotification; }

  // Expose raw query methods
  get $executeRaw() { return this._client.$executeRaw.bind(this._client); }
  get $queryRaw() { return this._client.$queryRaw.bind(this._client); }
  get $transaction() { return this._client.$transaction.bind(this._client); }
}
