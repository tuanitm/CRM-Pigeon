import { Controller, Get, Post, Patch, Param, Body, ParamData, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';
import { NotificationService } from '../admin/notification.service';

@ApiTags('Customer - Support')
@Controller('support/tickets')
export class CustomerSupportController {
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationService,
  ) {}

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Get all support tickets for a customer' })
  async getTickets(@Param('customerId') customerId: string) {
    return this.prisma.supportTicket.findMany({
      where: { customerId },
      orderBy: { createdAt: 'desc' }
    });
  }

  @Post()
  @ApiOperation({ summary: 'Create a new support ticket' })
  async createTicket(@Body() dto: { customerId: string, subject: string, category: string, message: string }) {
    const initialMessage = {
      sender: 'customer',
      message: dto.message,
      timestamp: new Date().toISOString()
    };

    const ticket = await this.prisma.supportTicket.create({
      data: {
        customerId: dto.customerId,
        subject: dto.subject,
        category: dto.category,
        messages: [initialMessage]
      }
    });

    // Look up customer name for notification
    const cust = await this.prisma.customer.findUnique({ where: { id: dto.customerId }, select: { fullName: true } });
    this.notifications.emit(
      'TICKET',
      `New support ticket: ${dto.subject}`,
      `From ${cust?.fullName || 'Customer'} • ${dto.category}`,
      `/customer360/${dto.customerId}`,
    );

    return ticket;
  }

  @Post(':id/reply')
  @ApiOperation({ summary: 'Reply to an existing support ticket' })
  async replyTicket(@Param('id') id: string, @Body() dto: { message: string }) {
    const ticket = await this.prisma.supportTicket.findUnique({ where: { id } });
    if (!ticket) throw new NotFoundException('Ticket not found');

    const newMessage = {
      sender: 'customer',
      message: dto.message,
      timestamp: new Date().toISOString()
    };

    const messages = Array.isArray(ticket.messages) ? [...ticket.messages] : [];
    messages.push(newMessage);

    return this.prisma.supportTicket.update({
      where: { id },
      data: { messages }
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update ticket status by customer' })
  async updateStatus(@Param('id') id: string, @Body() dto: { status: string }) {
    // Only allow setting to Resolved from customer side for simplicity
    if (dto.status !== 'Resolved') throw new Error('Customers can only mark tickets as Resolved');
    
    return this.prisma.supportTicket.update({
      where: { id },
      data: { status: dto.status }
    });
  }
}
