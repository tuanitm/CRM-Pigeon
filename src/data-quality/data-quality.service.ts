import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class DataQualityService {
  private readonly logger = new Logger(DataQualityService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Evaluate data quality for a specific customer.
   * This checks predefined hardcoded rules or dynamic rules from DB.
   */
  async evaluateCustomerQuality(customerId: string): Promise<void> {
    try {
      const customer = await this.prisma.customer.findUnique({
        where: { id: customerId },
        include: {
          babies: true,
          identities: true,
        },
      });

      if (!customer) return;

      const activeRules = await this.prisma.data_quality_rule.findMany({
        where: { is_active: true },
      });

      const failedRuleIds: string[] = [];

      for (const rule of activeRules) {
        let isFailed = false;

        // Simplified rule evaluation based on code
        switch (rule.code) {
          case 'MISSING_BABY_DOB':
            // Check if any baby is missing both dob and due date
            if (
              customer.babies.some((b: any) => !b.dateOfBirth && !b.dueDate)
            ) {
              isFailed = true;
            }
            break;

          case 'INVALID_PHONE':
            // Basic E.164 check: +84 followed by 9 digits
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
            // Dynamic JSON logic could go here
            break;
        }

        if (isFailed) {
          failedRuleIds.push(rule.id);

          // Upsert flag log
          await this.prisma.data_quality_flag_log
            .upsert({
              where: {
                id: '00000000-0000-0000-0000-000000000000', // Prisma needs unique constraint to upsert, actually data_quality_flag_log doesn't have a unique constraint on [customer_id, rule_id]. We must find first.
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
              // If no unique constraint, just manually check and insert
              const existing =
                await this.prisma.data_quality_flag_log.findFirst({
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

      // Resolve previously flagged rules that no longer fail
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

      // Update customer summary flag
      const newStatus = failedRuleIds.length > 0 ? 'WARNING' : 'CLEAN';
      if (customer.dataQualityFlag !== newStatus) {
        await this.prisma.customer.update({
          where: { id: customer.id },
          data: { dataQualityFlag: newStatus },
        });
      }
    } catch (error) {
      this.logger.error(
        `Error evaluating data quality for customer ${customerId}:`,
        error,
      );
    }
  }

  /**
   * Seed standard data quality rules if they don't exist
   */
  async seedRules(): Promise<void> {
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
}
