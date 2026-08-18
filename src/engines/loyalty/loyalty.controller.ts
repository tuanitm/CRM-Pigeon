import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { PointsService } from './points.service';
import { TierService } from './tier.service';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

class EarnPointsDto {
  source: string;
  points: number;
  referenceType?: string;
  referenceId?: string;
  description?: string;
}

class RedeemPointsDto {
  points: number;
  referenceType: string;
  referenceId: string;
  description: string;
}

@ApiTags('Loyalty')
@Controller('loyalty')
export class LoyaltyController {
  constructor(
    private readonly pointsService: PointsService,
    private readonly tierService: TierService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('accounts/:customerId')
  @ApiOperation({ summary: 'Get loyalty account details for a customer' })
  async getAccount(@Param('customerId') customerId: string) {
    const account = await this.prisma.loyaltyAccount.findUnique({
      where: { customerId },
      include: { tier: true },
    });

    if (!account) {
      // Return a dummy object if account does not exist yet
      const defaultTier = await this.prisma.loyaltyTierConfig.findFirst({
        where: { isDefault: true },
      });
      return {
        customerId,
        pointsBalance: 0,
        pointsLifetime: 0,
        tier: { tierCode: defaultTier?.tierCode || 'NONE' },
      };
    }

    return account;
  }

  @Post('points/:customerId/earn')
  @ApiOperation({ summary: 'Manually award points to a customer' })
  async earnPoints(
    @Param('customerId') customerId: string,
    @Body() dto: EarnPointsDto,
  ) {
    return this.pointsService.earnPoints({
      customerId,
      source: dto.source,
      points: dto.points,
      referenceType: dto.referenceType,
      referenceId: dto.referenceId,
      description: dto.description,
      idempotencyKey: uuidv4(), // Generate unique idempotency key for manual awards
    });
  }

  @Post('points/:customerId/redeem')
  @ApiOperation({ summary: 'Redeem points for a customer' })
  async redeemPoints(
    @Param('customerId') customerId: string,
    @Body() dto: RedeemPointsDto,
  ) {
    return this.pointsService.redeemPoints({
      customerId,
      points: dto.points,
      referenceType: dto.referenceType,
      referenceId: dto.referenceId,
      description: dto.description,
      idempotencyKey: uuidv4(),
    });
  }

  @Get('tiers/:customerId/evaluate')
  @ApiOperation({ summary: 'Evaluate and return tier metrics for a customer' })
  async evaluateTier(@Param('customerId') customerId: string) {
    return this.tierService.evaluateCustomerTier(customerId);
  }
}
