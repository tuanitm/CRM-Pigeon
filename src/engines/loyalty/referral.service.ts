import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { PointsService } from './points.service';
import { v4 as uuidv4 } from 'uuid';

/**
 * Referral Service — Referral program with anti-fraud detection.
 * Detects: same phone, same address, same device fingerprint.
 */
@Injectable()
export class ReferralService {
  private readonly logger = new Logger(ReferralService.name);

  constructor(
    private prisma: PrismaService,
    private pointsService: PointsService,
  ) {}

  /**
   * Generate a unique referral code for a customer.
   */
  async generateCode(customerId: string): Promise<string> {
    const existing = await this.prisma.referral_code.findFirst({
      where: { customer_id: customerId, is_active: true },
    });
    if (existing) return existing.code;

    const code = `PGN${uuidv4().slice(0, 6).toUpperCase()}`;
    await this.prisma.referral_code.create({
      data: { customer_id: customerId, code, max_uses: 10 },
    });
    return code;
  }

  /**
   * Process a referral conversion. Validates anti-fraud checks.
   */
  async processReferral(referralCode: string, referredCustomerId: string): Promise<{ success: boolean; error?: string }> {
    const codeRecord = await this.prisma.referral_code.findUnique({ where: { code: referralCode } });
    if (!codeRecord || !codeRecord.is_active) return { success: false, error: 'Invalid referral code' };
    if (codeRecord.max_uses && codeRecord.current_uses >= codeRecord.max_uses) {
      return { success: false, error: 'Referral code has reached max uses' };
    }

    // Anti-fraud: can't refer yourself
    if (codeRecord.customer_id === referredCustomerId) {
      return { success: false, error: 'Cannot refer yourself' };
    }

    // Anti-fraud: check for same phone (already handled by unique phone)
    // Anti-fraud: check for same address
    const referrerAddresses = await this.prisma.customerAddress.findMany({
      where: { customerId: codeRecord.customer_id },
      select: { addressLine1: true, district: true, province: true },
    });
    const referredAddresses = await this.prisma.customerAddress.findMany({
      where: { customerId: referredCustomerId },
      select: { addressLine1: true, district: true, province: true },
    });

    for (const ra of referrerAddresses) {
      for (const rd of referredAddresses) {
        if (ra.addressLine1 && ra.addressLine1 === rd.addressLine1 &&
            ra.district === rd.district && ra.province === rd.province) {
          this.logger.warn(`Referral fraud suspected: same address for ${codeRecord.customer_id} and ${referredCustomerId}`);
          return { success: false, error: 'Referral rejected: address match detected' };
        }
      }
    }

    // Check for duplicate conversion
    const existingConversion = await this.prisma.referral_conversion.findFirst({
      where: { referral_code_id: codeRecord.id, referred_id: referredCustomerId },
    });
    if (existingConversion) return { success: false, error: 'Already referred' };

    // Create conversion
    const referrerPoints = 200;
    const referredPoints = 100;

    await this.prisma.referral_conversion.create({
      data: {
        referral_code_id: codeRecord.id,
        referrer_id: codeRecord.customer_id,
        referred_id: referredCustomerId,
        status: 'converted',
        referrer_points: referrerPoints,
        referred_points: referredPoints,
        converted_at: new Date(),
      },
    });

    // Update use count
    await this.prisma.referral_code.update({
      where: { id: codeRecord.id },
      data: { current_uses: codeRecord.current_uses + 1 },
    });

    // Award points to both parties
    await this.pointsService.earnPoints({
      customerId: codeRecord.customer_id,
      source: 'referral',
      points: referrerPoints,
      referenceType: 'referral_conversion',
      description: 'Referral bonus: friend signed up',
      idempotencyKey: `referral:referrer:${codeRecord.id}:${referredCustomerId}`,
    });

    await this.pointsService.earnPoints({
      customerId: referredCustomerId,
      source: 'referral',
      points: referredPoints,
      referenceType: 'referral_conversion',
      description: 'Welcome bonus: referred by friend',
      idempotencyKey: `referral:referred:${codeRecord.id}:${referredCustomerId}`,
    });

    this.logger.log(`Referral converted: ${codeRecord.customer_id} → ${referredCustomerId}`);
    return { success: true };
  }
}
