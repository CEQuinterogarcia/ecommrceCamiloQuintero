import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cartitem } from '../cartitem/entities/cartitem.entity';


@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':cartId/add-product')
  async addProductToCart(
    @Param('cartId') cartId: number,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ): Promise<Cartitem> {
    return await this.cartService.addProductToCart(cartId, productId, quantity);
  }

  @Get(':cartId')
  async getCartItems(@Param('cartId') cartId: number): Promise<Cartitem[]> {
    return await this.cartService.getCartItems(cartId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
 

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  
}
