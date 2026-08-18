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
var DataQualityService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataQualityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/prisma/prisma.service");
let DataQualityService = DataQualityService_1 = class DataQualityService {
    prisma;
    logger = new common_1.Logger(DataQualityService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async evaluateCustomerQuality(customerId) {
        try {
            const customer = await this.prisma.customer.findUnique({
                where: { id: customerId },
                include: {
                    babies: true,
                    identities: true,
                },
            });
            if (!customer)
                return;
            const activeRules = await this.prisma.data_quality_rule.findMany({
                where: { is_active: true },
            });
            const failedRuleIds = [];
            for (const rule of activeRules) {
                let isFailed = false;
                switch (rule.code) {
                    case 'MISSING_BABY_DOB':
                        if (customer.babies.some((b) => !b.dateOfBirth && !b.dueDate)) {
                            isFailed = true;
                        }
                        break;
                    case 'INVALID_PHONE':
                        if (customer.phone && !/^\+84\d{9}$/.test(customer.phone)) {
                            isFailed = true;
                        }
                        break;
                    case 'MISSING_EMAIL_AND_PHONE':
                        if (!customer.phone && !customer.email) {
                            isFailed = true;
                        }
                        break;
                    default:
                        break;
                }
                if (isFailed) {
                    failedRuleIds.push(rule.id);
                    await this.prisma.data_quality_flag_log
                        .upsert({
                        where: {
                            id: '00000000-0000-0000-0000-000000000000',
                        },
                        create: {
                            customer_id: customer.id,
                            rule_id: rule.id,
                            flag_reason: `Failed rule ${rule.code}`,
                            resolved: false,
                        },
                        update: {
                            resolved: false,
                            flagged_at: new Date(),
                        },
                    })
                        .catch(async () => {
                        const existing = await this.prisma.data_quality_flag_log.findFirst({
                            where: {
                                customer_id: customer.id,
                                rule_id: rule.id,
                                resolved: false,
                            },
                        });
                        if (!existing) {
                            await this.prisma.data_quality_flag_log.create({
                                data: {
                                    customer_id: customer.id,
                                    rule_id: rule.id,
                                    flag_reason: `Failed rule ${rule.code}`,
                                    resolved: false,
                                },
                            });
                        }
                    });
                }
            }
            const existingFlags = await this.prisma.data_quality_flag_log.findMany({
                where: { customer_id: customer.id, resolved: false },
            });
            for (const flag of existingFlags) {
                if (!failedRuleIds.includes(flag.rule_id)) {
                    await this.prisma.data_quality_flag_log.update({
                        where: { id: flag.id },
                        data: { resolved: true, resolved_at: new Date() },
                    });
                }
            }
            const newStatus = failedRuleIds.length > 0 ? 'WARNING' : 'CLEAN';
            if (customer.dataQualityFlag !== newStatus) {
                await this.prisma.customer.update({
                    where: { id: customer.id },
                    data: { dataQualityFlag: newStatus },
                });
            }
        }
        catch (error) {
            this.logger.error(`Error evaluating data quality for customer ${customerId}:`, error);
        }
    }
    async seedRules() {
        const rules = [
            {
                code: 'MISSING_BABY_DOB',
                name: 'Baby Profile Incomplete',
                rule_type: 'completeness',
                conditions: { field: 'baby.dob', check: 'exists' },
                severity: 'warning',
            },
            {
                code: 'INVALID_PHONE',
                name: 'Invalid VN Phone Format',
                rule_type: 'accuracy',
                conditions: {
                    field: 'customer.phone',
                    check: 'regex',
                    pattern: '^\\+84\\d{9}$',
                },
                severity: 'critical',
            },
            {
                code: 'MISSING_EMAIL_AND_PHONE',
                name: 'Unreachable Customer',
                rule_type: 'completeness',
                conditions: { field: 'customer.contact', check: 'exists' },
                severity: 'critical',
            },
        ];
        for (const rule of rules) {
            await this.prisma.data_quality_rule.upsert({
                where: { code: rule.code },
                update: {},
                create: rule,
            });
        }
        this.logger.log('Data quality rules seeded successfully');
    }
};
exports.DataQualityService = DataQualityService;
exports.DataQualityService = DataQualityService = DataQualityService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DataQualityService);
//# sourceMappingURL=data-quality.service.js.map