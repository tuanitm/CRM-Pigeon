import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ZaloMiniAppService } from './zalo-mini-app.service';

@Controller('admin/zalo-mini-app')
export class ZaloMiniAppController {
  constructor(private readonly service: ZaloMiniAppService) {}

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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
