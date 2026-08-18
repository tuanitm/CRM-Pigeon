import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class ZaloOAService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.zaloOA.findMany({
      include: { adminUser: true, miniApps: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: string) {
    return this.prisma.zaloOA.findUnique({
      where: { id },
      include: { adminUser: true, miniApps: true },
    });
  }

  async create(data: {
    oaId: string;
    name: string;
    description?: string;
    avatarUrl?: string;
    packageName?: string;
    followers?: number;
    status?: string;
    expiryDate?: string;
    ownerId?: string;
  }) {
    return this.prisma.zaloOA.create({
      data: {
        oaId: data.oaId,
        name: data.name,
        description: data.description,
        avatarUrl: data.avatarUrl,
        packageName: data.packageName,
        followers: data.followers ?? 0,
        status: data.status ?? 'connected',
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        ownerId: data.ownerId,
      },
    });
  }

  async update(id: string, data: any) {
    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined)
      updateData.description = data.description;
    if (data.avatarUrl !== undefined) updateData.avatarUrl = data.avatarUrl;
    if (data.packageName !== undefined)
      updateData.packageName = data.packageName;
    if (data.followers !== undefined) updateData.followers = data.followers;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.expiryDate !== undefined)
      updateData.expiryDate = data.expiryDate
        ? new Date(data.expiryDate)
        : null;
    return this.prisma.zaloOA.update({ where: { id }, data: updateData });
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.zaloOA.update({ where: { id }, data: { status } });
  }

  async delete(id: string) {
    const linkedApps = await this.prisma.zaloMiniApp.count({
      where: { zaloOAId: id },
    });
    if (linkedApps > 0) {
      throw new Error(
        `Cannot delete this OA because it is linked to ${linkedApps} Mini App(s). Unlink them first.`,
      );
    }
    return this.prisma.zaloOA.delete({ where: { id } });
  }
}
