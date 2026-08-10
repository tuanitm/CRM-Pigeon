import { Controller, Get, Post, Patch, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { DataHubService } from './data-hub.service';

@Controller('admin/data-hubs')
export class DataHubController {
  constructor(private readonly dataHubService: DataHubService) {}

  @Get()
  async getAll() {
    return this.dataHubService.getAllDataHubs();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.dataHubService.getById(id);
  }

  @Post()
  async create(@Body() body: { name: string; source: string; ownerId?: string }) {
    return this.dataHubService.createDataHub(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { name?: string; source?: string }) {
    return this.dataHubService.updateDataHub(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.dataHubService.deleteDataHub(id);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }

  // ─── Tables ──────────────────────────────────────────

  @Post(':id/tables')
  async addTable(@Param('id') hubId: string, @Body() body: { name: string }) {
    return this.dataHubService.addTable(hubId, body.name);
  }

  @Patch('tables/:tableId')
  async updateTable(@Param('tableId') tableId: string, @Body() body: { name: string }) {
    return this.dataHubService.updateTable(tableId, body.name);
  }

  @Delete('tables/:tableId')
  async deleteTable(@Param('tableId') tableId: string) {
    return this.dataHubService.deleteTable(tableId);
  }

  // ─── Columns ─────────────────────────────────────────

  @Post('tables/:tableId/columns')
  async addColumn(@Param('tableId') tableId: string, @Body() body: { name: string; dataType: string }) {
    return this.dataHubService.addColumn(tableId, body.name, body.dataType);
  }

  @Patch('columns/:colId')
  async updateColumn(@Param('colId') colId: string, @Body() body: { name?: string; dataType?: string }) {
    return this.dataHubService.updateColumn(colId, body);
  }

  @Delete('columns/:colId')
  async deleteColumn(@Param('colId') colId: string) {
    return this.dataHubService.deleteColumn(colId);
  }

  // ─── Records ─────────────────────────────────────────

  @Get('tables/:tableId/records')
  async getRecords(@Param('tableId') tableId: string) {
    return this.dataHubService.getRecords(tableId);
  }

  @Post('tables/:tableId/records')
  async addRecord(@Param('tableId') tableId: string, @Body() body: { data: any }) {
    return this.dataHubService.addRecord(tableId, body.data);
  }

  @Patch('records/:recordId')
  async updateRecord(@Param('recordId') recordId: string, @Body() body: { data: any }) {
    return this.dataHubService.updateRecord(recordId, body.data);
  }

  @Delete('records/:recordId')
  async deleteRecord(@Param('recordId') recordId: string) {
    return this.dataHubService.deleteRecord(recordId);
  }
}
