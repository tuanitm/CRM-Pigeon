import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { SegmentService as EngineSegmentService } from '../engines/segmentation/segment.service';

@Injectable()
export class SegmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly engineSegmentService: EngineSegmentService,
  ) {}

  async listSegments() {
    return this.prisma.segment.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async seedMandatorySegments() {
    await this.engineSegmentService.seedMandatorySegments();
    return { success: true };
  }

  async createSegment(data: { code: string; name: string; refreshMode: string; rules: any }) {
    // Check if code exists
    const existing = await this.prisma.segment.findUnique({
      where: { code: data.code },
    });
    if (existing) {
      throw new BadRequestException(`Segment with code ${data.code} already exists.`);
    }

    return this.prisma.segment.create({
      data: {
        code: data.code,
        name: data.name,
        rules: data.rules,
        refreshMode: data.refreshMode,
        isSystem: false,
        isActive: true,
      },
    });
  }

  async updateSegment(code: string, data: { name?: string; refreshMode?: string; rules?: any; isActive?: boolean }) {
    return this.prisma.segment.update({
      where: { code },
      data,
    });
  }
}
