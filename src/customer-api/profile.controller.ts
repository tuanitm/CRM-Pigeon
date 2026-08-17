import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';

@ApiTags('Customer Profile')
@Controller('customers')
export class ProfileController {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get customer profile (360 view)' })
  async getProfile(@Param('id') id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
      include: {
        babies: true,
        addresses: true,
        tags: true,
        event: {
          orderBy: { occurred_at: 'desc' },
          take: 100
        },
        loyaltyAccount: { 
          include: { 
            tier: true,
            transactions: {
              orderBy: { createdAt: 'desc' },
              take: 50
            }
          } 
        },
        consents: true,
        reward_redemption: {
          include: { reward_catalog: true },
          orderBy: { createdAt: 'desc' }
        },
        journey_run: {
          include: { journey: true },
          orderBy: { entered_at: 'desc' }
        },
        orders: {
          where: { isInternal: true },
          include: { items: { include: { product: true } } },
          orderBy: { createdAt: 'desc' }
        },
        devices: {
          orderBy: { lastLogin: 'desc' }
        }
      },
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update customer profile' })
  async updateProfile(@Param('id') id: string, @Body() data: any) {
    // Optionally check if phone is already used by another customer
    if (data.phone) {
      const existing = await this.prisma.customer.findFirst({
        where: { phone: data.phone, id: { not: id } }
      });
      if (existing) throw new Error('Phone number already in use');
    }

    const oldCustomer = await this.prisma.customer.findUnique({
      where: { id },
      include: { addresses: true }
    });
    const oldEmail = oldCustomer?.email;
    const oldAddress = oldCustomer?.addresses?.[0]?.addressLine1;

    let eventsToLog: any[] = [];

    if (data.babies) {
      const existingBabies = await this.prisma.baby.findMany({ where: { customerId: id } });
      const incomingIds = data.babies.filter((b: any) => b.id).map((b: any) => b.id);
      const toDelete = existingBabies.filter(b => !incomingIds.includes(b.id));

      for (const b of toDelete) {
        await this.prisma.baby.delete({ where: { id: b.id } });
      }

      for (const b of data.babies) {
        const babyData = {
          name: b.name,
          gender: b.gender,
          dateOfBirth: b.dateOfBirth ? new Date(b.dateOfBirth) : null,
          dueDate: b.dueDate ? new Date(b.dueDate) : null,
          isBorn: b.isBorn !== undefined ? b.isBorn : true,
          stageCode: b.stageCode,
        };
        if (b.id) {
          await this.prisma.baby.update({ where: { id: b.id }, data: babyData });
          eventsToLog.push({ type: 'CHILD_MODIFIED', props: { babyId: b.id, name: b.name } });
        } else {
          const newBaby = await this.prisma.baby.create({ data: { ...babyData, customerId: id } });
          eventsToLog.push({ type: 'CHILD_ADDED', props: { babyId: newBaby.id, name: b.name } });
        }
      }
    }

    const updatedCustomer = await this.prisma.customer.update({
      where: { id },
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        gender: data.gender,
        customerType: data.customerType,
        dmsCode: data.dmsCode,
        notes: data.notes,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        avatarUrl: data.avatarUrl,
        addresses: data.address !== undefined ? {
          deleteMany: {},
          create: data.address ? [{ addressLine1: data.address }] : [],
        } : undefined,
      },
    });

    if (data.email && data.email !== oldEmail) {
      eventsToLog.push({ type: 'EMAIL_UPDATED', props: { oldEmail, newEmail: data.email } });
    }
    if (data.address !== undefined && data.address !== oldAddress) {
      eventsToLog.push({ type: 'ADDRESS_UPDATED', props: { oldAddress, newAddress: data.address } });
    }
    if (data.fullName && data.fullName !== oldCustomer?.fullName) {
      eventsToLog.push({ type: 'PROFILE_UPDATED', props: { updatedFields: ['fullName'] } });
    }

    for (const evt of eventsToLog) {
      await this.prisma.event.create({
        data: {
          customer_id: id,
          event_type: evt.type,
          properties: evt.props,
          source: 'customer-api'
        }
      });
    }

    if (data.isOnboardingCompletion) {
      await this.evaluateWelcomeBonus(id);
    }

    return updatedCustomer;
  }

  private async evaluateWelcomeBonus(customerId: string) {
    // Skip Welcome Onboarding for non-End-user types (Outlet, Keyshop)
    const customer = await this.prisma.customer.findUnique({ where: { id: customerId }, select: { customerType: true } });
    if (customer?.customerType && customer.customerType !== 'End user') return;

    const welcomeRule = await this.prisma.loyaltyEarnRule.findFirst({
      where: { source: 'welcome_bonus', ruleName: 'Welcome Onboarding', isActive: true },
    });
    
    if (!welcomeRule) return;

    const now = new Date();
    if ((welcomeRule.validFrom && welcomeRule.validFrom > now) || 
        (welcomeRule.validUntil && welcomeRule.validUntil < now)) {
      return;
    }

    let loyaltyAccount = await this.prisma.loyaltyAccount.findUnique({ where: { customerId } });
    if (!loyaltyAccount) {
      loyaltyAccount = await this.prisma.loyaltyAccount.create({ data: { customerId } });
    }

    const formula = welcomeRule.pointsFormula as any;
    let rewards = [];
    
    if (formula?.rewards && Array.isArray(formula.rewards)) {
      rewards = formula.rewards;
    } else if (formula?.rewardType) {
      rewards = [formula];
    } else if (formula?.type === 'fixed') {
      rewards = [{ type: 'points', value: formula.value }];
    }

    let rewardContexts = [];
    
    // Check if customer has a child for conditional rewards
    const babyCount = await this.prisma.baby.count({ where: { customerId } });
    const hasChild = babyCount > 0;

    for (const r of rewards) {
      // Evaluate conditions
      if (r.condition === 'has_child' && !hasChild) continue;

      const rType = r.type || r.rewardType || 'points';
      
      if (rType === 'points') {
        const pts = r.value || 0;
        if (pts > 0) {
          await this.prisma.loyaltyAccount.update({
            where: { id: loyaltyAccount.id },
            data: {
              pointsBalance: { increment: pts },
              pointsLifetime: { increment: pts },
              transactions: {
                create: {
                  customerId,
                  type: 'earn',
                  source: 'welcome_bonus',
                  points: pts,
                  balanceAfter: pts,
                  description: r.condition ? 'Welcome Onboarding Bonus (Extra)' : 'Welcome Onboarding Bonus',
                  idempotencyKey: `welcome-${customerId}-${r.condition || 'base'}-${Date.now()}`,
                }
              }
            }
          });
          rewardContexts.push({ type: 'points', pointsEarned: pts, condition: r.condition });
        }
      } else if (rType === 'free_gift' && r.rewardId) {
        await this.prisma.rewardRedemption.create({
          data: {
            loyaltyAccountId: loyaltyAccount.id,
            customerId,
            rewardId: r.rewardId,
            pointsSpent: 0,
            status: 'pending',
            idempotencyKey: `welcome-gift-${customerId}-${r.rewardId}-${Date.now()}`
          }
        });
        rewardContexts.push({ type: 'free_gift', rewardId: r.rewardId });
      } else if (rType === 'voucher' && r.rewardId) {
        await this.prisma.rewardRedemption.create({
          data: {
            loyaltyAccountId: loyaltyAccount.id,
            customerId,
            rewardId: r.rewardId,
            pointsSpent: 0,
            status: 'pending',
            idempotencyKey: `welcome-voucher-${customerId}-${r.rewardId}-${Date.now()}`
          }
        });
        rewardContexts.push({ type: 'voucher', rewardId: r.rewardId });
      } else if (rType === 'product' && r.productId) {
        const orderNum = `INT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        await this.prisma.order.create({
          data: {
            customerId,
            orderNumber: orderNum,
            status: 'pending',
            totalAmount: 0,
            isInternal: true,
            isGwp: false,
            orderedAt: new Date(),
            items: {
              create: {
                productId: r.productId,
                quantity: 1,
                unitPrice: 0,
                totalPrice: 0,
              }
            }
          }
        });
        rewardContexts.push({ type: 'product', productId: r.productId });
      }
    }

    // Ensure JRN_WELCOME_ONBOARDING journey exists
    const journey = await this.prisma.journey.upsert({
      where: { code: 'JRN_WELCOME_ONBOARDING' },
      update: {},
      create: {
        code: 'JRN_WELCOME_ONBOARDING',
        name: 'Welcome Onboarding',
        status: 'active',
        triggerEvent: 'customer.profile_completed'
      }
    });

    // Log Journey Run
    await this.prisma.journey_run.create({
      data: {
        journey_id: journey.id,
        customer_id: customerId,
        status: 'completed',
        context: { rewards: rewardContexts },
        entered_at: now,
        exited_at: now,
      }
    });
  }

  @Patch(':id/reward-redemptions/:redemptionId/status')
  @ApiOperation({ summary: 'Update GWP fulfillment status' })
  async updateRewardRedemptionStatus(
    @Param('id') id: string,
    @Param('redemptionId') redemptionId: string,
    @Body() data: { status: string; shipmentNo?: string; trackingLink?: string }
  ) {
    return this.prisma.rewardRedemption.update({
      where: { id: redemptionId, customerId: id },
      data: { 
        status: data.status, 
        fulfilledAt: data.status === 'fulfilled' ? new Date() : null,
        shipmentNo: data.shipmentNo,
        trackingLink: data.trackingLink
      }
    });
  }

  @Patch(':id/orders/:orderId/status')
  @ApiOperation({ summary: 'Update internal order status' })
  async updateOrderStatus(
    @Param('id') id: string,
    @Param('orderId') orderId: string,
    @Body() data: { status: string; shipmentNo?: string; trackingLink?: string }
  ) {
    return this.prisma.order.update({
      where: { id: orderId, customerId: id },
      data: { 
        status: data.status,
        shipmentNo: data.shipmentNo,
        trackingLink: data.trackingLink
      }
    });
  }
}
