import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  async createProduct(
    @Body('name') name: string,
    @Body('image') image: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('stock') stock: number,
  ): Promise<Product> {
    return await this.productsService.createProduct(name, image, description, price, stock);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<Product> {
    return await this.productsService.getProductById(id);
  }


  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
