import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
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
  async create(@Body() body: {
    name: string;
    description?: string;
    trigger: string;
    target: string;
    startDate?: string;
    endDate?: string;
    dataHubId?: string;
  }) {
    return this.service.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.service.updateStatus(id, body.status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.delete(id);
  }

  // --- Pages ---

  @Post(':id/pages')
  async addPage(@Param('id') actionId: string, @Body() body: { title: string; pageOrder?: number }) {
    return this.service.addPage(actionId, body);
  }

  @Patch('pages/:pageId')
  async updatePage(@Param('pageId') pageId: string, @Body() body: any) {
    return this.service.updatePage(pageId, body);
  }

  @Delete('pages/:pageId')
  async deletePage(@Param('pageId') pageId: string) {
    return this.service.deletePage(pageId);
  }

  // --- Components ---

  @Post('pages/:pageId/components')
  async addComponent(@Param('pageId') pageId: string, @Body() body: {
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: any;
    componentOrder?: number;
  }) {
    return this.service.addComponent(pageId, body);
  }

  @Patch('components/:compId')
  async updateComponent(@Param('compId') compId: string, @Body() body: any) {
    return this.service.updateComponent(compId, body);
  }

  @Delete('components/:compId')
  async deleteComponent(@Param('compId') compId: string) {
    return this.service.deleteComponent(compId);
  }
}
