import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

/**
 * 8-level priority identity resolution as defined in the SRS.
 * Priority order: phone > email > zalo_id > woo_customer_id > device_id > cookie_id > ip_ua > anonymous_id
 */
@Injectable()
export class IdentityResolverService {
  private readonly logger = new Logger(IdentityResolverService.name);

  private readonly PRIORITY_MAP: Record<string, number> = {
    phone: 1,
    email: 2,
    zalo_id: 3,
    woo_customer_id: 4,
    device_id: 5,
    cookie_id: 6,
    ip_ua: 7,
    anonymous_id: 8,
  };

  constructor(private prisma: PrismaService) {}

  /**
   * Resolve a customer from identity pairs, ordered by priority.
   * Returns existing customer_id or null.
   */
  async resolve(
    identities: { type: string; value: string }[],
  ): Promise<string | null> {
    // Sort by priority (lowest number = highest priority)
    const sorted = identities
      .filter((i) => this.PRIORITY_MAP[i.type] !== undefined)
      .sort(
        (a, b) =>
          (this.PRIORITY_MAP[a.type] || 99) - (this.PRIORITY_MAP[b.type] || 99),
      );

    for (const identity of sorted) {
      // Phone is checked directly on customer table (primary key)
      if (identity.type === 'phone') {
        const customer = await this.prisma.customer.findUnique({
          where: { phone: identity.value },
          select: { id: true },
        });
        if (customer) return customer.id;
      }

      // All other types checked via customer_identity table
      const found = await this.prisma.customerIdentity.findUnique({
        where: {
          identityType_identityValue: {
            identityType: identity.type,
            identityValue: identity.value,
          },
        },
        select: { customerId: true },
      });
      if (found) return found.customerId;
    }

    return null;
  }

  /**
   * Link an identity to a customer. If the identity already exists on another
   * customer, queue a merge candidate instead of auto-merging (SRS rule).
   */
  async linkIdentity(
    customerId: string,
    type: string,
    value: string,
  ): Promise<void> {
    const existing = await this.prisma.customerIdentity.findUnique({
      where: {
        identityType_identityValue: {
          identityType: type,
          identityValue: value,
        },
      },
    });

    if (existing && existing.customerId !== customerId) {
      // Queue merge candidate — NEVER auto-merge (SRS: highest severity risk)
      await this.prisma.mergeCandidate.create({
        data: {
          customerIdA: customerId,
          customerIdB: existing.customerId,
          matchReason: `Shared ${type}: ${value}`,
          confidenceScore: type === 'phone' ? 95 : 70,
          status: 'pending',
        },
      });
      this.logger.warn(
        `Merge candidate queued: ${customerId} <-> ${existing.customerId} via ${type}`,
      );
      return;
    }

    if (!existing) {
      await this.prisma.customerIdentity.create({
        data: {
          customerId,
          identityType: type,
          identityValue: value,
          priority: this.PRIORITY_MAP[type] || 99,
        },
      });
    }
  }
}
