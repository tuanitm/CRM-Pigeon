import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class LoyaltyService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── Tier Config ──────────────────────────────────────
  async listTiers() {
    return this.prisma.loyaltyTierConfig.findMany({
      orderBy: { tierOrder: 'asc' },
      include: { _count: { select: { accounts: true } } },
    });
  }

  async createTier(data: {
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: number;
    minDistinctMonths?: number;
    pointsMultiplier?: number;
    benefits?: any;
    isDefault?: boolean;
  }) {
    return this.prisma.loyaltyTierConfig.create({
      data: {
        tierCode: data.tierCode,
        tierName: data.tierName,
        tierOrder: data.tierOrder,
        minNetSpend: data.minNetSpend ?? 0,
        minDistinctMonths: data.minDistinctMonths ?? 0,
        pointsMultiplier: data.pointsMultiplier ?? 1.0,
        benefits: data.benefits ?? {},
        isDefault: data.isDefault ?? false,
      },
    });
  }

  async updateTier(id: string, data: any) {
    const d: any = {};
    if (data.tierCode !== undefined) d.tierCode = data.tierCode;
    if (data.tierName !== undefined) d.tierName = data.tierName;
    if (data.tierOrder !== undefined) d.tierOrder = data.tierOrder;
    if (data.minNetSpend !== undefined) d.minNetSpend = data.minNetSpend;
    if (data.minDistinctMonths !== undefined) d.minDistinctMonths = data.minDistinctMonths;
    if (data.pointsMultiplier !== undefined) d.pointsMultiplier = data.pointsMultiplier;
    if (data.benefits !== undefined) d.benefits = data.benefits;
    if (data.isDefault !== undefined) d.isDefault = data.isDefault;
    return this.prisma.loyaltyTierConfig.update({ where: { id }, data: d });
  }

  async deleteTier(id: string) {
    const linked = await this.prisma.loyaltyAccount.count({ where: { tierId: id } });
    if (linked > 0) {
      throw new Error(`Cannot delete: ${linked} account(s) are assigned to this tier.`);
    }
    return this.prisma.loyaltyTierConfig.delete({ where: { id } });
  }

  // ─── Earn Rules ───────────────────────────────────────
  async listEarnRules() {
    return this.prisma.loyaltyEarnRule.findMany({ orderBy: { createdAt: 'asc' } });
  }

  async getWelcomeRule() {
    return this.prisma.loyaltyEarnRule.findFirst({
      where: { source: 'welcome_bonus', ruleName: 'Welcome Onboarding' },
    });
  }

  async upsertWelcomeRule(data: { isActive: boolean; points: any; validFrom?: string; validUntil?: string }) {
    const existing = await this.getWelcomeRule();
    
    // If the frontend sent an object (the new format), use it directly.
    // If they sent a number (legacy), wrap it.
    let formula = data.points;
    if (typeof formula === 'number') {
      formula = { rewardType: 'points', value: formula };
    }

    const payload = {
      source: 'welcome_bonus',
      ruleName: 'Welcome Onboarding',
      pointsFormula: formula,
      isActive: data.isActive,
      validFrom: data.validFrom ? new Date(data.validFrom) : null,
      validUntil: data.validUntil ? new Date(data.validUntil) : null,
      tierMultiplierApplies: false,
    };

    if (existing) {
      return this.prisma.loyaltyEarnRule.update({
        where: { id: existing.id },
        data: payload,
      });
    } else {
      return this.prisma.loyaltyEarnRule.create({
        data: payload,
      });
    }
  }

  async createEarnRule(data: {
    source: string;
    ruleName: string;
    pointsFormula: any;
    conditions?: any;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
  }) {
    return this.prisma.loyaltyEarnRule.create({
      data: {
        source: data.source,
        ruleName: data.ruleName,
        pointsFormula: data.pointsFormula,
        conditions: data.conditions ?? {},
        tierMultiplierApplies: data.tierMultiplierApplies ?? true,
        isActive: data.isActive ?? true,
      },
    });
  }

  async updateEarnRule(id: string, data: any) {
    const d: any = {};
    if (data.source !== undefined) d.source = data.source;
    if (data.ruleName !== undefined) d.ruleName = data.ruleName;
    if (data.pointsFormula !== undefined) d.pointsFormula = data.pointsFormula;
    if (data.conditions !== undefined) d.conditions = data.conditions;
    if (data.tierMultiplierApplies !== undefined) d.tierMultiplierApplies = data.tierMultiplierApplies;
    if (data.isActive !== undefined) d.isActive = data.isActive;
    return this.prisma.loyaltyEarnRule.update({ where: { id }, data: d });
  }

  async deleteEarnRule(id: string) {
    return this.prisma.loyaltyEarnRule.delete({ where: { id } });
  }

  // ─── Reward Catalog ───────────────────────────────────
  async listRewards() {
    return this.prisma.rewardCatalog.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { reward_redemption: true } } },
    });
  }

  async createReward(data: {
    code: string;
    name: string;
    description?: string;
    category?: string;
    pointsCost: number;
    stock?: number;
    imageUrl?: string;
    isActive?: boolean;
  }) {
    return this.prisma.rewardCatalog.create({
      data: {
        code: data.code,
        name: data.name,
        description: data.description,
        category: data.category,
        pointsCost: data.pointsCost,
        stock: data.stock,
        imageUrl: data.imageUrl,
        isActive: data.isActive ?? true,
      },
    });
  }

  async updateReward(id: string, data: any) {
    const d: any = {};
    if (data.code !== undefined) d.code = data.code;
    if (data.name !== undefined) d.name = data.name;
    if (data.description !== undefined) d.description = data.description;
    if (data.category !== undefined) d.category = data.category;
    if (data.pointsCost !== undefined) d.pointsCost = data.pointsCost;
    if (data.stock !== undefined) d.stock = data.stock;
    if (data.imageUrl !== undefined) d.imageUrl = data.imageUrl;
    if (data.isActive !== undefined) d.isActive = data.isActive;
    return this.prisma.rewardCatalog.update({ where: { id }, data: d });
  }

  async deleteReward(id: string) {
    const used = await this.prisma.rewardRedemption.count({ where: { rewardId: id } });
    if (used > 0) {
      throw new Error(`Cannot delete: ${used} redemption(s) reference this reward.`);
    }
    return this.prisma.rewardCatalog.delete({ where: { id } });
  }

  // ─── Dashboard Stats ──────────────────────────────────
  async getStats() {
    const [totalAccounts, totalBalance, totalRedeemed, totalExpired] = await Promise.all([
      this.prisma.loyaltyAccount.count(),
      this.prisma.loyaltyAccount.aggregate({ _sum: { pointsBalance: true } }),
      this.prisma.loyaltyAccount.aggregate({ _sum: { pointsRedeemed: true } }),
      this.prisma.loyaltyAccount.aggregate({ _sum: { pointsExpired: true } }),
    ]);

    return {
      totalAccounts,
      totalPointsCirculating: totalBalance._sum.pointsBalance || 0,
      totalPointsRedeemed: totalRedeemed._sum.pointsRedeemed || 0,
      totalPointsExpired: totalExpired._sum.pointsExpired || 0,
    };
  }

  // ─── Recent Transactions ──────────────────────────────
  async listRecentTransactions(take = 20) {
    return this.prisma.loyaltyTransaction.findMany({
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { id: true, fullName: true, phone: true } },
      },
    });
  }

  // ─── Redemptions ──────────────────────────────────────
  async listRedemptions(take = 20) {
    return this.prisma.rewardRedemption.findMany({
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: { select: { id: true, fullName: true, phone: true } },
        reward_catalog: { select: { code: true, name: true } },
      },
    });
  }
}
