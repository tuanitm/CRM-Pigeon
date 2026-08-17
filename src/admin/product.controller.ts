import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('admin/products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async listProducts() {
    return this.service.listProducts();
  }
}
