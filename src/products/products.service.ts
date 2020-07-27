import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {

  async create(body: any): Promise<Product> {
      const product: Product = new Product();
      product.name = body.name
      product.content = body.content
      product.category = body.category
      product.tags = body.tags
      await product.save()

      return product
  }

    async update(body: any): Promise<Product> {
        const product: Product = await Product.findOne(body.id)
        product.name = body.name
        product.content = body.content
        product.category = body.category
        product.tags = body.tags
        return product.save()
    }

  findAll(): Promise<Product[]> {
    return Product.find({relations: ['category', 'tags']})
  }

  findOne(id: string): Promise<Product> {
    return Product.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await Product.delete(id);
  }
}