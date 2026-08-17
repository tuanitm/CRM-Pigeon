import { Controller, Post, Body, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { PointsService } from '../engines/loyalty/points.service';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('QR Verification')
@Controller('serials')
export class SerialController {
  constructor(
    private prisma: PrismaService,
    private pointsService: PointsService,
  ) {}

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify product serial (public — no auth required)' })
  async verifySerial(@Body() data: { serialCode: string; ipAddress?: string }) {
    const serial = await this.prisma.$queryRaw`
      SELECT ps.*, p.name as product_name, p.category, sb.batch_code
      FROM product_serial ps
      JOIN product p ON p.id = ps.product_id
      JOIN serial_batch sb ON sb.id = ps.batch_id
      WHERE ps.serial_code = ${data.serialCode}
    ` as any[];

    if (!serial.length) {
      // Log scan attempt
      return { valid: false, message: 'Serial code not found. This product may not be authentic.' };
    }

    const s = serial[0];
    const scanResult = s.status === 'active' ? 'authentic' : 'already_claimed';

    // Log the scan
    await this.prisma.$executeRaw`
      INSERT INTO serial_scan (id, serial_id, scan_result, ip_address, scanned_at)
      VALUES (uuid_generate_v4(), ${s.id}::uuid, ${scanResult}, ${data.ipAddress}, NOW())
    `;

    return {
      valid: true,
      scanResult,
      product: { name: s.product_name, category: s.category },
      canClaim: s.status === 'active',
    };
  }

  @Post('claim')
  @ApiOperation({ summary: 'Claim serial for points (requires auth)' })
  async claimSerial(@Body() data: { serialCode: string; customerId: string }) {
    // Note: A real implementation should use a JwtAuthGuard here and get customerId from req.user
    // For now we trust the customerId from the body

    const serials = await this.prisma.product_serial.findMany({
      where: { serial_code: data.serialCode },
      include: { product: true }
    });

    if (!serials.length) {
      return { status: 'error', message: 'Serial code not found.' };
    }

    const serial = serials[0];

    if (serial.status !== 'active') {
      return { status: 'error', message: 'This serial code has already been claimed.' };
    }

    // Mark as claimed
    await this.prisma.product_serial.update({
      where: { id: serial.id },
      data: {
        status: 'claimed',
        claimed_by: data.customerId,
        claimed_at: new Date(),
      }
    });

    // Record the scan
    await this.prisma.serial_scan.create({
      data: {
        serial_id: serial.id,
        customer_id: data.customerId,
        scan_result: 'claimed',
      }
    });

    // Award points
    // The PointsService will also look up EarnRules if any exist for source: 'qr_scan'
    const result = await this.pointsService.earnPoints({
      customerId: data.customerId,
      source: 'qr_scan',
      points: 100, // default points for a scan
      referenceType: 'product_serial',
      referenceId: serial.id,
      description: `Claimed QR code for ${serial.product.name}`,
      idempotencyKey: uuidv4()
    });

    if (result.success) {
      await this.prisma.event.create({
        data: {
          customer_id: data.customerId,
          event_type: 'POINTS_EARNED',
          properties: {
            points: 100,
            productName: serial.product.name,
            serialCode: data.serialCode
          },
          source: 'customer-portal'
        }
      });
      return { status: 'claimed', message: 'Points awarded successfully', newBalance: result.newBalance };
    } else {
      return { status: 'error', message: result.error };
    }
  }
}
