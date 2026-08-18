import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DynamicActionService } from './dynamic-action.service';

@Controller('admin/dynamic-actions')
export class DynamicActionController {
  constructor(private readonly service: DynamicActionService) {}

  @Get()
  async list() {
    return this.service.list();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post()
  async create(
    @Body()
    body: {
      name: string;
      description?: string;
      trigger: string;
      target: string;
      startDate?: string;
      endDate?: string;
    },
  ) {
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
    return this.service.delete(id);
  }
}
