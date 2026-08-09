import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IdentifyDto } from './dto/identify.dto';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RedisService } from '../shared/redis/redis.service';

@ApiTags('Ingestion')
@Controller('identify')
export class IdentifyController {
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
            registrationSource: 'api',
          },
        });
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

    return { status: 'identified', customerId: customer?.id || null };
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
