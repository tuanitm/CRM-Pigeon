import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async listProducts() {
    return this.prisma.product.findMany({
      where: { isActive: true },
      select: { id: true, sku: true, name: true, category: true, price: true },
      orderBy: { name: 'asc' },
    });
  }
}
