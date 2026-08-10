import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class DataHubService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllDataHubs() {
    return this.prisma.dataHub.findMany({
      include: {
        adminUser: true,
        tables: {
          include: { _count: { select: { records: true, columns: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    return this.prisma.dataHub.findUnique({
      where: { id },
      include: {
        adminUser: true,
        tables: {
          include: {
            columns: { orderBy: { name: 'asc' } },
            _count: { select: { records: true } },
          },
          orderBy: { name: 'asc' },
        },
      },
    });
  }

  async createDataHub(data: { name: string; source: string; ownerId?: string }) {
    return this.prisma.dataHub.create({
      data: { name: data.name, source: data.source, ownerId: data.ownerId },
    });
  }

  async updateDataHub(id: string, data: { name?: string; source?: string }) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.source !== undefined) updateData.source = data.source;
    return this.prisma.dataHub.update({ where: { id }, data: updateData });
  }

  async deleteDataHub(id: string) {
    const linkedActions = await this.prisma.dynamicAction.count({
      where: { dataHubId: id },
    });
    if (linkedActions > 0) {
      throw new Error(
        `Cannot delete this Data Hub because it is linked to ${linkedActions} Dynamic Action(s). Unlink them first.`,
      );
    }
    return this.prisma.dataHub.delete({ where: { id } });
  }

  // ─── Tables ──────────────────────────────────────────

  async addTable(hubId: string, name: string) {
    return this.prisma.dataHubTable.create({
      data: { dataHubId: hubId, name },
    });
  }

  async updateTable(tableId: string, name: string) {
    return this.prisma.dataHubTable.update({
      where: { id: tableId },
      data: { name },
    });
  }

  async deleteTable(tableId: string) {
    return this.prisma.dataHubTable.delete({ where: { id: tableId } });
  }

  // ─── Columns ─────────────────────────────────────────

  async addColumn(tableId: string, name: string, dataType: string) {
    return this.prisma.dataHubColumn.create({
      data: { tableId, name, dataType },
    });
  }

  async updateColumn(colId: string, data: { name?: string; dataType?: string }) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.dataType !== undefined) updateData.dataType = data.dataType;
    return this.prisma.dataHubColumn.update({ where: { id: colId }, data: updateData });
  }

  async deleteColumn(colId: string) {
    return this.prisma.dataHubColumn.delete({ where: { id: colId } });
  }

  // ─── Records ─────────────────────────────────────────

  async getRecords(tableId: string) {
    return this.prisma.dataHubRecord.findMany({
      where: { tableId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async addRecord(tableId: string, data: any) {
    return this.prisma.dataHubRecord.create({
      data: { tableId, data },
    });
  }

  async updateRecord(recordId: string, data: any) {
    return this.prisma.dataHubRecord.update({
      where: { id: recordId },
      data: { data },
    });
  }

  async deleteRecord(recordId: string) {
    return this.prisma.dataHubRecord.delete({ where: { id: recordId } });
  }
}
