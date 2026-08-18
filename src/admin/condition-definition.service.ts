import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class ConditionDefinitionService {
  constructor(private readonly prisma: PrismaService) {}

  async listConditions() {
    return this.prisma.conditionDefinition.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async getCondition(id: string) {
    return this.prisma.conditionDefinition.findUnique({
      where: { id },
    });
  }

  async createCondition(data: any) {
    return this.prisma.conditionDefinition.create({
      data: {
        code: data.code,
        name: data.name,
        type: data.type,
        source: data.source || 'customer',
        description: data.description,
        isActive: data.isActive !== false,
      },
    });
  }

  async updateCondition(id: string, data: any) {
    const d: any = {};
    if (data.code !== undefined) d.code = data.code;
    if (data.name !== undefined) d.name = data.name;
    if (data.type !== undefined) d.type = data.type;
    if (data.source !== undefined) d.source = data.source;
    if (data.description !== undefined) d.description = data.description;
    if (data.isActive !== undefined) d.isActive = data.isActive;

    return this.prisma.conditionDefinition.update({
      where: { id },
      data: d,
    });
  }

  async deleteCondition(id: string) {
    return this.prisma.conditionDefinition.delete({
      where: { id },
    });
  }
}
