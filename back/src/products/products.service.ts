import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async createProduct(name: string, image: string, description: string, price: number, stock: number): Promise<Product> {
    const product = this.productsRepository.create({ name, image, description, price, stock });
    return await this.productsRepository.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    return await this.productsRepository.findOne({ where: { id } });
  }


  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
