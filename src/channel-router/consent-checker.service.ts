import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class ConsentCheckerService {
  constructor(private prisma: PrismaService) {}

  /** Check if customer has granted consent for a specific channel */
  async hasConsent(customerId: string, channel: string): Promise<boolean> {
    const consent = await this.prisma.consent.findFirst({
      where: {
        customerId,
        channel,
        status: 'granted',
        revokedAt: null,
      },
    });
    return !!consent;
  }
}
