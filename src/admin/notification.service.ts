import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

export type NotificationCategory = 'CUSTOMER' | 'TICKET' | 'ORDER' | 'JOURNEY' | 'SYSTEM';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  /** Create a new admin notification */
  async emit(category: NotificationCategory, title: string, body?: string, link?: string) {
    return this.prisma.adminNotification.create({
      data: { category, title, body, link },
    });
  }

  /** List notifications, newest first */
  async list(take = 30, includeRead = false) {
    return this.prisma.adminNotification.findMany({
      where: includeRead ? {} : undefined,
      orderBy: { createdAt: 'desc' },
      take,
    });
  }

  /** Unread count */
  async unreadCount() {
    return this.prisma.adminNotification.count({
      where: { isRead: false },
    });
  }

  /** Mark a single notification as read */
  async markRead(id: string) {
    return this.prisma.adminNotification.update({
      where: { id },
      data: { isRead: true },
    });
  }

  /** Mark all notifications as read */
  async markAllRead() {
    await this.prisma.adminNotification.updateMany({
      where: { isRead: false },
      data: { isRead: true },
    });
    return { success: true };
  }
}
