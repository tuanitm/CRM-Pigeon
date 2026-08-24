import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { SegmentService } from './segment.service';

@Controller('admin/segments')
export class SegmentController {
  constructor(private readonly service: SegmentService) {}

  @Get()
  async listSegments() {
    return this.service.listSegments();
  }

  @Post('seed')
  async seedMandatorySegments() {
    return this.service.seedMandatorySegments();
  }

  @Post()
  async createSegment(@Body() body: any) {
    return this.service.createSegment(body);
  }

  @Patch(':code')
  async updateSegment(@Param('code') code: string, @Body() body: any) {
    return this.service.updateSegment(code, body);
  }
}
