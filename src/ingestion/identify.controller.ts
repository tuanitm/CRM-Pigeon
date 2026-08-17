import { Controller, Post, Body, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IdentifyDto } from './dto/identify.dto';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';

@ApiTags('Ingestion')
@Controller('identify')
export class IdentifyController {
  private readonly logger = new Logger(IdentifyController.name);

  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Identify / upsert customer by phone or anonymous ID' })
  async identify(@Body() dto: IdentifyDto) {
    // Idempotency check
    if (dto.idempotencyKey) {
      const isDup = await this.redis.checkIdempotency(dto.idempotencyKey);
      if (isDup) return { status: 'duplicate' };
    }

    // 8-level identity resolution priority:
    // 1. phone (primary) -> 2. email -> 3. zalo_id -> 4. woo_customer_id
    // 5. device_id -> 6. cookie_id -> 7. ip+ua -> 8. anonymous_id
    let customer = null;
    let isNew = false;

    if (dto.phone) {
      // Normalize to E.164
      const normalizedPhone = this.normalizePhone(dto.phone);
      customer = await this.prisma.customer.findUnique({
        where: { phone: normalizedPhone },
      });
      if (!customer) {
        customer = await this.prisma.customer.create({
          data: {
            phone: normalizedPhone,
            email: dto.email,
            fullName: dto.fullName,
            customerCode: 'CUS' + Date.now().toString().slice(-4) + Math.floor(100 + Math.random() * 900).toString(),
            registrationSource: 'api',
          },
        });
        isNew = true;

        // Create base loyalty account
        const loyaltyAccount = await this.prisma.loyaltyAccount.create({
          data: { customerId: customer.id },
        });

        // Welcome Onboarding pipeline bonus will be evaluated
        // in profile.controller.ts when the customer completes onboarding.
      }
    } else if (dto.email) {
      customer = await this.prisma.customer.findFirst({
        where: { email: dto.email },
      });
    }

    // Link anonymous_id if provided
    if (customer && dto.anonymousId) {
      await this.prisma.customerIdentity.upsert({
        where: {
          identityType_identityValue: {
            identityType: 'anonymous_id',
            identityValue: dto.anonymousId,
          },
        },
        update: { customerId: customer.id },
        create: {
          customerId: customer.id,
          identityType: 'anonymous_id',
          identityValue: dto.anonymousId,
          priority: 8,
        },
      });
    }

    // Process babies if provided
    if (customer && dto.babies && Array.isArray(dto.babies)) {
      for (const baby of dto.babies) {
        if (!baby.name || !baby.dateOfBirth || !baby.gender) {
          this.logger.warn(`Skipping baby record for customer ${customer.id} due to missing required fields`);
          continue;
        }

        await this.prisma.baby.create({
          data: {
            customerId: customer.id,
            name: baby.name,
            gender: baby.gender,
            dateOfBirth: new Date(baby.dateOfBirth),
            stageCode: baby.stageCode,
          },
        });
      }
    }

    return { status: 'identified', customerId: customer?.id || null, isNew };
  }

  private normalizePhone(phone: string): string {
    let cleaned = phone.replace(/\D/g, '');
    // Vietnam: convert 0xxx to +84xxx
    if (cleaned.startsWith('0')) {
      cleaned = '84' + cleaned.substring(1);
    }
    if (!cleaned.startsWith('+')) {
      cleaned = '+' + cleaned;
    }
    return cleaned;
  }
}
