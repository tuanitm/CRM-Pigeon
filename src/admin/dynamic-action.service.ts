import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class DynamicActionService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.dynamicAction.findMany({
      include: { adminUser: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    return this.prisma.dynamicAction.findUnique({
      where: { id },
      include: { adminUser: true },
    });
  }

  async create(data: {
    name: string;
    description?: string;
    trigger: string;
    target: string;
    startDate?: string;
    endDate?: string;
    ownerId?: string;
  }) {
    return this.prisma.dynamicAction.create({
      data: {
        name: data.name,
        description: data.description,
        trigger: data.trigger,
        target: data.target,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
        ownerId: data.ownerId,
      },
    });
  }

  async update(id: string, data: any) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined)
      updateData.description = data.description;
    if (data.trigger !== undefined) updateData.trigger = data.trigger;
    if (data.target !== undefined) updateData.target = data.target;
    if (data.startDate !== undefined)
      updateData.startDate = data.startDate ? new Date(data.startDate) : null;
    if (data.endDate !== undefined)
      updateData.endDate = data.endDate ? new Date(data.endDate) : null;

    return this.prisma.dynamicAction.update({
      where: { id },
      data: updateData,
    });
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.dynamicAction.update({
      where: { id },
      data: { status },
    });
  }

  async delete(id: string) {
    return this.prisma.dynamicAction.delete({ where: { id } });
  }
}
