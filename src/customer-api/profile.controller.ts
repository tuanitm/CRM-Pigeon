import { Controller, Get, Patch, Post, Param, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { JourneyEngineService } from '../engines/journey/journey-engine.service';
import { JourneyRunService } from '../engines/journey/journey-run.service';
import * as bcrypt from 'bcrypt';

@ApiTags('Customer Profile')
@Controller('customers')
export class ProfileController {
  private readonly logger = new Logger(ProfileController.name);

  constructor(
    private prisma: PrismaService,
    private journeyEngine: JourneyEngineService,
    private journeyRunService: JourneyRunService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Register a new customer from onboarding' })
  async registerCustomer(@Body() data: any) {
    // Normalize phone similar to IdentifyController
    let cleaned = (data.phone || '').replace(/\D/g, '');
    if (cleaned.startsWith('0')) cleaned = '84' + cleaned.substring(1);
    if (!cleaned.startsWith('+') && cleaned) cleaned = '+' + cleaned;

    // Check if phone already exists
    const existing = await this.prisma.customer.findFirst({
      where: { phone: cleaned },
    });
    if (existing) {
      throw new HttpException('Phone number already in use', HttpStatus.BAD_REQUEST);
    }

    let hashedPinCode = undefined;
    if (data.pinCode) {
      hashedPinCode = await bcrypt.hash(data.pinCode, 10);
    }

    const newCustomer = await this.prisma.customer.create({
      data: {
        phone: cleaned,
        email: data.email,
        fullName: data.fullName,
        customerCode: Math.floor(10000000 + Math.random() * 90000000).toString(),
        registrationSource: data.source || 'Portal',
        gender: data.gender,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        pinCode: hashedPinCode,
        addresses: data.address ? {
          create: [{ addressLine1: data.address }]
        } : undefined,
        identities: data.zaloId ? {
          create: [{ identityType: 'zalo_id', identityValue: data.zaloId, priority: 3 }]
        } : undefined,
        loyaltyAccount: {
          create: {
            pointsBalance: 0,
            pointsLifetime: 0,
            pointsRedeemed: 0,
            pointsExpired: 0,
          },
        },
      },
    });

    if (data.babies && Array.isArray(data.babies)) {
      for (const b of data.babies) {
        if (!b.name || !(b.dateOfBirth || b.dueDate)) continue;
        const babyData = {
          name: b.name,
          gender: b.gender,
          dateOfBirth: b.dateOfBirth ? new Date(b.dateOfBirth) : null,
          dueDate: b.dueDate ? new Date(b.dueDate) : null,
          isBorn: b.isBorn !== undefined ? b.isBorn : true,
          stageCode: b.stageCode,
          customerId: newCustomer.id
        };
        const newBaby = await this.prisma.baby.create({ data: babyData });
        
        try {
          await this.journeyRunService.handleEventTrigger(
            'baby.profile_created',
            newCustomer.id,
            { babyId: newBaby.id, babyName: b.name },
          );
        } catch (err) {
          this.logger.error(`Failed to fire baby.profile_created: ${(err as Error).message}`);
        }
      }
    }

    if (data.isOnboardingCompletion) {
      try {
        await this.journeyRunService.handleEventTrigger('customer.profile_completed', newCustomer.id);
        this.logger.log(`Fired customer.profile_completed for customer ${newCustomer.id}`);
      } catch (err) {
        this.logger.error(`Failed to fire customer.profile_completed: ${(err as Error).message}`);
      }
    }

    return newCustomer;
  }


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
          take: 100,
        },
        loyaltyAccount: {
          include: {
            tier: true,
            transactions: {
              orderBy: { createdAt: 'desc' },
              take: 50,
            },
          },
        },
        consents: true,
        reward_redemption: {
          include: { reward_catalog: true },
          orderBy: { createdAt: 'desc' },
        },
        journey_run: {
          include: { journey: true },
          orderBy: { entered_at: 'desc' },
        },
        orders: {
          where: { isInternal: true },
          include: { items: { include: { product: true } } },
          orderBy: { createdAt: 'desc' },
        },
        devices: {
          orderBy: { lastLogin: 'desc' },
        },
      },
    });
  }

  @Get(':id/debug-baby-journey')
  @ApiOperation({ summary: 'Debug journey trigger' })
  async debugBabyJourney(@Param('id') id: string) {
    this.logger.log(`Debugging baby.profile_created for ${id}`);
    await this.journeyRunService.handleEventTrigger(
      'baby.profile_created',
      id,
      { debug: true },
    );
    return { success: true };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update customer profile' })
  async updateProfile(@Param('id') id: string, @Body() data: any) {
    let cleanedPhone = data.phone;
    if (cleanedPhone) {
      cleanedPhone = cleanedPhone.replace(/\D/g, '');
      if (cleanedPhone.startsWith('0')) cleanedPhone = '84' + cleanedPhone.substring(1);
      if (!cleanedPhone.startsWith('+') && cleanedPhone) cleanedPhone = '+' + cleanedPhone;

      const existing = await this.prisma.customer.findFirst({
        where: { phone: cleanedPhone, id: { not: id } },
      });
      if (existing) throw new HttpException('Phone number already in use', HttpStatus.BAD_REQUEST);
    }

    const oldCustomer = await this.prisma.customer.findUnique({
      where: { id },
      include: { addresses: true },
    });
    const oldEmail = oldCustomer?.email;
    const oldAddress = oldCustomer?.addresses?.[0]?.addressLine1;

    const eventsToLog: any[] = [];

    if (data.babies) {
      const existingBabies = await this.prisma.baby.findMany({
        where: { customerId: id },
      });
      const incomingIds = data.babies
        .filter((b: any) => b.id)
        .map((b: any) => b.id);
      const toDelete = existingBabies.filter(
        (b) => !incomingIds.includes(b.id),
      );

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
          await this.prisma.baby.update({
            where: { id: b.id },
            data: babyData,
          });
          eventsToLog.push({
            type: 'CHILD_MODIFIED',
            props: { babyId: b.id, name: b.name },
          });
        } else {
          const newBaby = await this.prisma.baby.create({
            data: { ...babyData, customerId: id },
          });
          eventsToLog.push({
            type: 'CHILD_ADDED',
            props: { babyId: newBaby.id, name: b.name },
          });
          // Fire baby.profile_created → triggers JRN_WELCOME_BABY journey
          try {
            await this.journeyRunService.handleEventTrigger(
              'baby.profile_created',
              id,
              { babyId: newBaby.id, babyName: b.name },
            );
          } catch (err) {
            this.logger.error(
              `Failed to fire baby.profile_created: ${(err as Error).message}`,
            );
          }
        }
      }
    }

    if (data.zaloId) {
      await this.prisma.customerIdentity.upsert({
        where: {
          identityType_identityValue: {
            identityType: 'zalo_id',
            identityValue: data.zaloId,
          },
        },
        update: { customerId: id },
        create: {
          customerId: id,
          identityType: 'zalo_id',
          identityValue: data.zaloId,
          priority: 3,
        },
      });
    }

    let hashedPinCode = undefined;
    if (data.pinCode) {
      hashedPinCode = await bcrypt.hash(data.pinCode, 10);
    }

    const updatedCustomer = await this.prisma.customer.update({
      where: { id },
      data: {
        fullName: data.fullName,
        phone: cleanedPhone,
        email: data.email,
        gender: data.gender,
        customerType: data.customerType,
        dmsCode: data.dmsCode,
        notes: data.notes,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        avatarUrl: data.avatarUrl,
        pinCode: hashedPinCode,
        addresses:
          data.address !== undefined
            ? {
                deleteMany: {},
                create: data.address ? [{ addressLine1: data.address }] : [],
              }
            : undefined,
      },
    });

    const normalizedOldEmail = oldEmail || '';
    const normalizedNewEmail = data.email || '';
    if (data.email !== undefined && normalizedOldEmail !== normalizedNewEmail) {
      eventsToLog.push({
        type: 'EMAIL_UPDATED',
        props: { oldEmail: normalizedOldEmail || 'none', newEmail: normalizedNewEmail || 'none' },
      });
    }
    
    const normalizedOldAddress = oldAddress || '';
    const normalizedNewAddress = data.address || '';
    if (data.address !== undefined && normalizedOldAddress !== normalizedNewAddress) {
      eventsToLog.push({
        type: 'ADDRESS_UPDATED',
        props: { oldAddress: normalizedOldAddress || 'none', newAddress: normalizedNewAddress || 'none' },
      });
    }
    
    const normalizedOldName = oldCustomer?.fullName || '';
    const normalizedNewName = data.fullName || '';
    if (data.fullName !== undefined && normalizedOldName !== normalizedNewName) {
      eventsToLog.push({
        type: 'PROFILE_UPDATED',
        props: { updatedFields: ['fullName'] },
      });
    }

    for (const evt of eventsToLog) {
      await this.prisma.event.create({
        data: {
          customer_id: id,
          event_type: evt.type,
          properties: evt.props,
          source: 'customer-api',
        },
      });
    }

    if (data.isOnboardingCompletion) {
      // Fire customer.profile_completed → triggers any journey listening for this event
      try {
        await this.journeyRunService.handleEventTrigger(
          'customer.profile_completed',
          id,
        );
        this.logger.log(`Fired customer.profile_completed for customer ${id}`);
      } catch (err) {
        this.logger.error(
          `Failed to fire customer.profile_completed: ${(err as Error).message}`,
        );
      }
    }

    return updatedCustomer;
  }

  @Patch(':id/reward-redemptions/:redemptionId/status')
  @ApiOperation({ summary: 'Update GWP fulfillment status' })
  async updateRewardRedemptionStatus(
    @Param('id') id: string,
    @Param('redemptionId') redemptionId: string,
    @Body()
    data: { status: string; shipmentNo?: string; trackingLink?: string },
  ) {
    return this.prisma.rewardRedemption.update({
      where: { id: redemptionId, customerId: id },
      data: {
        status: data.status,
        fulfilledAt: data.status === 'fulfilled' ? new Date() : null,
        shipmentNo: data.shipmentNo,
        trackingLink: data.trackingLink,
      },
    });
  }

  @Patch(':id/orders/:orderId/status')
  @ApiOperation({ summary: 'Update internal order status' })
  async updateOrderStatus(
    @Param('id') id: string,
    @Param('orderId') orderId: string,
    @Body()
    data: { status: string; shipmentNo?: string; trackingLink?: string },
  ) {
    return this.prisma.order.update({
      where: { id: orderId, customerId: id },
      data: {
        status: data.status,
        shipmentNo: data.shipmentNo,
        trackingLink: data.trackingLink,
      },
    });
  }
}
