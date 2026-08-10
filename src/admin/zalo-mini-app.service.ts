import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class ZaloMiniAppService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.zaloMiniApp.findMany({
      include: { zaloOA: true, adminUser: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    return this.prisma.zaloMiniApp.findUnique({
      where: { id },
      include: { zaloOA: true, adminUser: true },
    });
  }

  async create(data: {
    name: string;
    description?: string;
    iconUrl?: string;
    themeColor?: string;
    status?: string;
    features?: string[];
    zaloOAId?: string;
    ownerId?: string;
  }) {
    return this.prisma.zaloMiniApp.create({
      data: {
        name: data.name,
        description: data.description,
        iconUrl: data.iconUrl,
        themeColor: data.themeColor ?? '#00c853',
        status: data.status ?? 'draft',
        features: data.features ?? [],
        zaloOAId: data.zaloOAId,
        ownerId: data.ownerId,
      },
    });
  }

  async update(id: string, data: any) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.iconUrl !== undefined) updateData.iconUrl = data.iconUrl;
    if (data.themeColor !== undefined) updateData.themeColor = data.themeColor;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.features !== undefined) updateData.features = data.features;
    if (data.zaloOAId !== undefined) updateData.zaloOAId = data.zaloOAId;
    if (data.totalUsers !== undefined) updateData.totalUsers = data.totalUsers;
    return this.prisma.zaloMiniApp.update({ where: { id }, data: updateData });
  }

  async delete(id: string) {
    return this.prisma.zaloMiniApp.delete({ where: { id } });
  }
}
