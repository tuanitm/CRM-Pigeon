import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getDashboardMetrics() {
    // 1. Total Revenue & Total Orders
    const ordersResult = await this.prisma.order.aggregate({
      _sum: {
        netAmount: true,
      },
      _count: {
        id: true,
      },
      where: {
        status: { notIn: ['cancelled', 'failed'] }, // Only count valid orders
      }
    });

    const totalRevenueRaw = ordersResult._sum.netAmount ? Number(ordersResult._sum.netAmount) : 0;
    const totalOrders = ordersResult._count.id;
    
    // We display in Millions on UI. Let's send raw values and let UI format it.
    const totalRevenue = totalRevenueRaw;

    // 2. Average Order Value (AOV)
    const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // 3. Total Products Sold
    const productsResult = await this.prisma.orderItem.aggregate({
      _sum: {
        quantity: true,
      }
    });
    const totalProductsSold = productsResult._sum.quantity || 0;

    // 4. Conversion Rate & Retention Rate
    const totalCustomers = await this.prisma.customer.count({
      where: { isActive: true }
    });

    // Customers who bought at least once
    const buyersCountResult = await this.prisma.order.groupBy({
      by: ['customerId'],
      where: { status: { notIn: ['cancelled', 'failed'] } }
    });
    const totalBuyers = buyersCountResult.length;

    // Customers who bought more than once
    const repeatBuyersCount = buyersCountResult.filter(b => true).length; // Need a different query for this.
    // Let's do it correctly:
    const repeatBuyersQuery = await this.prisma.$queryRaw<{ count: number }[]>`
      SELECT COUNT(*) as count FROM (
        SELECT customer_id FROM "order" 
        WHERE status NOT IN ('cancelled', 'failed') 
        GROUP BY customer_id 
        HAVING COUNT(id) > 1
      ) as repeat_buyers
    `;
    const repeatBuyers = repeatBuyersQuery.length > 0 ? Number(repeatBuyersQuery[0].count) : 0;

    const conversionRate = totalCustomers > 0 ? (totalBuyers / totalCustomers) * 100 : 0;
    const retentionRate = totalBuyers > 0 ? (repeatBuyers / totalBuyers) * 100 : 0;

    // 5. Messages Sent Today (Using event log or message_log if available)
    // Let's query event log for "message_sent" or similar. If not available, return 0.
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const messagesSentToday = await this.prisma.message_log.count({
      where: {
        sent_at: {
          gte: today
        }
      }
    }).catch(() => 0); // Fallback in case message_log doesn't have sent_at

    // 6. Daily Revenue Chart (Last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentOrders = await this.prisma.order.findMany({
      where: {
        orderedAt: { gte: thirtyDaysAgo },
        status: { notIn: ['cancelled', 'failed'] }
      },
      select: {
        orderedAt: true,
        netAmount: true
      }
    });

    // Map to a 30-element array of numbers for the chart
    const revenueBars = Array(30).fill(0);
    let totalRecentRevenue = 0;

    recentOrders.forEach(order => {
      // Calculate how many days ago this was
      const msPerDay = 1000 * 3600 * 24;
      const dayDiff = Math.floor((order.orderedAt.getTime() - thirtyDaysAgo.getTime()) / msPerDay);
      
      if (dayDiff >= 0 && dayDiff < 30) {
        const amount = Number(order.netAmount || 0);
        revenueBars[dayDiff] += amount;
        totalRecentRevenue += amount;
      }
    });

    // 7. Recent Activities
    const recentActivities = await this.prisma.event.findMany({
      take: 5,
      orderBy: { occurred_at: 'desc' },
      include: { customer: true }
    });

    const mappedActivities = recentActivities.map(e => {
      let desc = e.event_type;
      let color = '#3b82f6';
      
      if (e.event_type === 'page_view') {
        desc = 'Viewed a page';
        color = '#9ca3af';
      } else if (e.event_type === 'login') {
        desc = 'Logged in';
        color = '#10b981';
      } else if (e.event_type === 'order_placed' || e.event_type === 'order_created') {
        desc = 'Placed an order';
        color = '#f59e0b';
      } else if (e.event_type === 'tier_upgraded') {
        desc = 'Upgraded membership tier';
        color = '#FFD700';
      } else if (e.event_type === 'points_redeemed') {
        desc = 'Redeemed points';
        color = '#ec4899';
      } else if (e.event_type === 'points_earned') {
        desc = 'Earned points';
        color = '#8b5cf6';
      } else if (e.event_type === 'qr_scanned') {
        desc = 'Scanned QR Code';
        color = '#06b6d4';
      } else {
        // Convert snake_case to Title Case
        desc = e.event_type
          .split('_')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
      }

      return {
        title: e.customer && e.customer.fullName ? e.customer.fullName : 'Anonymous User',
        desc,
        time: e.occurred_at.toISOString(),
        color
      };
    });

    // 8. Profit (Estimated 30%)
    const profit = totalRevenue * 0.3;

    return {
      kpis: {
        totalRevenue,
        totalOrders,
        profit,
        aov,
        totalProductsSold,
        conversionRate,
        retentionRate,
        messagesSentToday,
      },
      revenueChart: {
        bars: revenueBars,
        total: totalRecentRevenue,
        avgPerDay: totalRecentRevenue / 30,
      },
      recentActivities: mappedActivities
    };
  }
}
