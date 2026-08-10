import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class DynamicActionService {
  constructor(private readonly prisma: PrismaService) {}

  // --- Helper mapping ---
  private mapComponentTypeToDataType(type: string): string {
    switch (type) {
      case 'number':
        return 'number';
      case 'date':
      case 'dateRange':
        return 'date';
      case 'checkbox':
        return 'boolean';
      case 'email':
        return 'email';
      case 'phone':
        return 'phone';
      default:
        return 'text';
    }
  }

  // --- Schema Synchronization ---
  private async syncDataHubSchema(actionId: string, dataHubId: string) {
    // Get full action tree
    const action = await this.prisma.dynamicAction.findUnique({
      where: { id: actionId },
      include: {
        pages: {
          include: { components: true }
        }
      }
    });
    if (!action) return;

    for (const page of action.pages) {
      let tableId = page.dataHubTableId;
      // 1. Create table if missing
      if (!tableId) {
        const table = await this.prisma.dataHubTable.create({
          data: { dataHubId, name: page.title }
        });
        tableId = table.id;
        await this.prisma.dynamicActionPage.update({
          where: { id: page.id },
          data: { dataHubTableId: tableId }
        });
      }

      // 2. Create columns if missing
      for (const comp of page.components) {
        if (!comp.dataHubColumnId && tableId) {
          const dataType = this.mapComponentTypeToDataType(comp.type);
          const column = await this.prisma.dataHubColumn.create({
            data: { tableId, name: comp.label, dataType }
          });
          await this.prisma.dynamicActionComponent.update({
            where: { id: comp.id },
            data: { dataHubColumnId: column.id }
          });
        }
      }
    }
  }

  async list() {
    return this.prisma.dynamicAction.findMany({
      include: {
        adminUser: true,
        dataHub: true,
        pages: { include: { components: true }, orderBy: { pageOrder: 'asc' } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    return this.prisma.dynamicAction.findUnique({
      where: { id },
      include: {
        adminUser: true,
        dataHub: true,
        pages: {
          include: {
            components: {
              orderBy: { componentOrder: 'asc' },
              include: { dataHubColumn: true },
            },
            dataHubTable: true,
          },
          orderBy: { pageOrder: 'asc' },
        },
      },
    });
  }

  async create(data: {
    name: string;
    description?: string;
    trigger: string;
    target: string;
    startDate?: string;
    endDate?: string;
    dataHubId?: string;
    ownerId?: string;
  }) {
    const action = await this.prisma.dynamicAction.create({
      data: {
        name: data.name,
        description: data.description,
        trigger: data.trigger,
        target: data.target,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
        dataHubId: data.dataHubId,
        ownerId: data.ownerId,
      },
    });

    if (data.dataHubId) {
      await this.syncDataHubSchema(action.id, data.dataHubId);
    }

    return action;
  }

  async update(id: string, data: any) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.trigger !== undefined) updateData.trigger = data.trigger;
    if (data.target !== undefined) updateData.target = data.target;
    if (data.startDate !== undefined) updateData.startDate = data.startDate ? new Date(data.startDate) : null;
    if (data.endDate !== undefined) updateData.endDate = data.endDate ? new Date(data.endDate) : null;
    if (data.dataHubId !== undefined) updateData.dataHubId = data.dataHubId;

    const action = await this.prisma.dynamicAction.update({ where: { id }, data: updateData });

    if (data.dataHubId) {
      await this.syncDataHubSchema(action.id, data.dataHubId);
    }

    return action;
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.dynamicAction.update({
      where: { id },
      data: { status },
    });
  }

  async delete(id: string) {
    // Note: This deletes the Dynamic Action, Pages, and Components via Cascade on Prisma schema.
    // It DOES NOT delete the DataHub Table/Columns, preserving the collected data history.
    return this.prisma.dynamicAction.delete({ where: { id } });
  }

  // --- Page management ---

  async addPage(actionId: string, data: { title: string; pageOrder?: number }) {
    const maxOrder = await this.prisma.dynamicActionPage.aggregate({
      where: { actionId },
      _max: { pageOrder: true },
    });
    
    let tableId: string | undefined = undefined;

    // Auto-create table if linked to a data hub
    const action = await this.prisma.dynamicAction.findUnique({ where: { id: actionId } });
    if (action?.dataHubId) {
      const table = await this.prisma.dataHubTable.create({
        data: { dataHubId: action.dataHubId, name: data.title }
      });
      tableId = table.id;
    }

    return this.prisma.dynamicActionPage.create({
      data: {
        actionId,
        title: data.title,
        pageOrder: data.pageOrder ?? (maxOrder._max.pageOrder ?? 0) + 1,
        dataHubTableId: tableId,
      },
    });
  }

  async updatePage(pageId: string, data: any) {
    const updateData: any = {};
    if (data.title !== undefined) updateData.title = data.title;
    if (data.pageOrder !== undefined) updateData.pageOrder = data.pageOrder;
    if (data.headerConfig !== undefined) updateData.headerConfig = data.headerConfig;
    if (data.actionConfig !== undefined) updateData.actionConfig = data.actionConfig;
    if (data.dataHubTableId !== undefined) updateData.dataHubTableId = data.dataHubTableId;

    const page = await this.prisma.dynamicActionPage.update({ where: { id: pageId }, data: updateData });

    // Auto-update table name
    if (data.title && page.dataHubTableId) {
      await this.prisma.dataHubTable.update({
        where: { id: page.dataHubTableId },
        data: { name: data.title }
      });
    }

    return page;
  }

  async deletePage(pageId: string) {
    // Only deletes the page (cascades to components). 
    // DataHub Table and data is preserved.
    return this.prisma.dynamicActionPage.delete({ where: { id: pageId } });
  }

  // --- Component management ---

  async addComponent(pageId: string, data: {
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: any;
    componentOrder?: number;
  }) {
    const maxOrder = await this.prisma.dynamicActionComponent.aggregate({
      where: { pageId },
      _max: { componentOrder: true },
    });

    let columnId: string | undefined = undefined;

    // Auto-create column if page is linked to a table
    const page = await this.prisma.dynamicActionPage.findUnique({ where: { id: pageId } });
    if (page?.dataHubTableId) {
      const dataType = this.mapComponentTypeToDataType(data.type);
      const column = await this.prisma.dataHubColumn.create({
        data: { tableId: page.dataHubTableId, name: data.label, dataType }
      });
      columnId = column.id;
    }

    return this.prisma.dynamicActionComponent.create({
      data: {
        pageId,
        type: data.type,
        label: data.label,
        placeholder: data.placeholder,
        required: data.required ?? false,
        options: data.options ?? [],
        componentOrder: data.componentOrder ?? (maxOrder._max.componentOrder ?? 0) + 1,
        dataHubColumnId: columnId,
      },
    });
  }

  async updateComponent(compId: string, data: any) {
    const updateData: any = {};
    if (data.type !== undefined) updateData.type = data.type;
    if (data.label !== undefined) updateData.label = data.label;
    if (data.placeholder !== undefined) updateData.placeholder = data.placeholder;
    if (data.required !== undefined) updateData.required = data.required;
    if (data.options !== undefined) updateData.options = data.options;
    if (data.componentOrder !== undefined) updateData.componentOrder = data.componentOrder;
    if (data.dataHubColumnId !== undefined) updateData.dataHubColumnId = data.dataHubColumnId;

    const comp = await this.prisma.dynamicActionComponent.update({ where: { id: compId }, data: updateData });

    // Auto-update column name/type
    if ((data.label || data.type) && comp.dataHubColumnId) {
      const colUpdateData: any = {};
      if (data.label) colUpdateData.name = data.label;
      if (data.type) colUpdateData.dataType = this.mapComponentTypeToDataType(data.type);

      await this.prisma.dataHubColumn.update({
        where: { id: comp.dataHubColumnId },
        data: colUpdateData
      });
    }

    return comp;
  }

  async deleteComponent(compId: string) {
    // Only deletes the component. DataHub Column and data is preserved.
    return this.prisma.dynamicActionComponent.delete({ where: { id: compId } });
  }
}
