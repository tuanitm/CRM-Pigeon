import { Controller, Get, Patch, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NotificationService } from './notification.service';

@ApiTags('Admin - Notifications')
@Controller('admin/notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  @ApiOperation({ summary: 'List recent notifications' })
  async list(@Query('take') take?: string) {
    const limit = take ? parseInt(take, 10) : 30;
    const [items, unreadCount] = await Promise.all([
      this.notificationService.list(limit, true),
      this.notificationService.unreadCount(),
    ]);
    return { items, unreadCount };
  }

  @Patch('read-all')
  @ApiOperation({ summary: 'Mark all notifications as read' })
  async markAllRead() {
    return this.notificationService.markAllRead();
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Mark single notification as read' })
  async markRead(@Param('id') id: string) {
    return this.notificationService.markRead(id);
  }
}
