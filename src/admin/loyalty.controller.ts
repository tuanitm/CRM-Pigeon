import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';

@Controller('admin/loyalty')
export class LoyaltyController {
  constructor(private readonly service: LoyaltyService) {}

  // ─── Stats ────────────────────────────────────────────
  @Get('stats')
  async getStats() {
    return this.service.getStats();
  }

  // ─── Tiers ────────────────────────────────────────────
  @Get('tiers')
  async listTiers() {
    return this.service.listTiers();
  }

  @Post('tiers')
  async createTier(@Body() body: any) {
    return this.service.createTier(body);
  }

  @Patch('tiers/:id')
  async updateTier(@Param('id') id: string, @Body() body: any) {
    return this.service.updateTier(id, body);
  }

  @Delete('tiers/:id')
  async deleteTier(@Param('id') id: string) {
    try {
      return await this.service.deleteTier(id);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }

  // ─── Earn Rules ───────────────────────────────────────
  @Get('welcome-rule')
  async getWelcomeRule() {
    return this.service.getWelcomeRule();
  }

  @Post('welcome-rule')
  async upsertWelcomeRule(@Body() body: any) {
    return this.service.upsertWelcomeRule(body);
  }

  @Get('earn-rules')
  async listEarnRules() {
    return this.service.listEarnRules();
  }

  @Post('earn-rules')
  async createEarnRule(@Body() body: any) {
    return this.service.createEarnRule(body);
  }

  @Patch('earn-rules/:id')
  async updateEarnRule(@Param('id') id: string, @Body() body: any) {
    return this.service.updateEarnRule(id, body);
  }

  @Delete('earn-rules/:id')
  async deleteEarnRule(@Param('id') id: string) {
    return this.service.deleteEarnRule(id);
  }

  // ─── Rewards ──────────────────────────────────────────
  @Get('rewards')
  async listRewards() {
    return this.service.listRewards();
  }

  @Post('rewards')
  async createReward(@Body() body: any) {
    return this.service.createReward(body);
  }

  @Patch('rewards/:id')
  async updateReward(@Param('id') id: string, @Body() body: any) {
    return this.service.updateReward(id, body);
  }

  @Delete('rewards/:id')
  async deleteReward(@Param('id') id: string) {
    try {
      return await this.service.deleteReward(id);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }

  // ─── Transactions & Redemptions ───────────────────────
  @Get('transactions')
  async listTransactions(@Query('take') take?: string) {
    return this.service.listRecentTransactions(take ? parseInt(take) : 20);
  }

  @Get('redemptions')
  async listRedemptions(@Query('take') take?: string) {
    return this.service.listRedemptions(take ? parseInt(take) : 20);
  }
}
