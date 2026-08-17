import { Controller, Get, Patch, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../shared/prisma/prisma.service';

@ApiTags('Admin - Support')
@Controller('admin/support/tickets')
export class AdminSupportController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all support tickets system-wide' })
  async getAllTickets() {
    return this.prisma.supportTicket.findMany({
      include: { customer: { select: { fullName: true, customerCode: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Get all support tickets for a customer' })
  async getTicketsByCustomer(@Param('customerId') customerId: string) {
    return this.prisma.supportTicket.findMany({
      where: { customerId },
      orderBy: { createdAt: 'desc' }
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update ticket status' })
  async updateStatus(@Param('id') id: string, @Body() dto: { status: string }) {
    return this.prisma.supportTicket.update({
      where: { id },
      data: { status: dto.status }
    });
  }

  @Post(':id/reply')
  @ApiOperation({ summary: 'Reply to an existing support ticket as admin' })
  async replyTicket(@Param('id') id: string, @Body() dto: { message: string, adminName?: string }) {
    const ticket = await this.prisma.supportTicket.findUnique({ where: { id } });
    if (!ticket) throw new NotFoundException('Ticket not found');

    const newMessage = {
      sender: 'admin',
      adminName: dto.adminName || 'Support Team',
      message: dto.message,
      timestamp: new Date().toISOString()
    };

    const messages = Array.isArray(ticket.messages) ? [...ticket.messages] : [];
    messages.push(newMessage);

    return this.prisma.supportTicket.update({
      where: { id },
      data: { messages, status: 'In Progress' } // Auto-mark in progress when replied
    });
  }
}
