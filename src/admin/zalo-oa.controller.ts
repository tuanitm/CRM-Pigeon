import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { ZaloOAService } from './zalo-oa.service';

@Controller('admin/zalo-oa')
export class ZaloOAController {
  constructor(private readonly service: ZaloOAService) {}

  @Get()
  async list() {
    return this.service.list();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post()
  async create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() body: { status: string },
  ) {
    return this.service.updateStatus(id, body.status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.delete(id);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }
}
