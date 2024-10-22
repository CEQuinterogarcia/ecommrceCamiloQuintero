import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { Cartitem } from '../cartitem/entities/cartitem.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
    @InjectRepository(Cartitem)
    private cartItemsRepository: Repository<Cartitem>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  
 
  async addProductToCart(cartId: number, productId: number, quantity: number): Promise<Cartitem> {
    const cart = await this.cartsRepository.findOne({ where: { id: cartId } });
    const product = await this.productsRepository.findOne({ where: { id: productId } });

    const cartItem = this.cartItemsRepository.create({ cart, product, quantity });
    return await this.cartItemsRepository.save(cartItem);
  } 

  async getCartItems(cartId: number): Promise<Cartitem[]> {
    return await this.cartItemsRepository.find({ where: { cart: { id: cartId } }, relations: ['product'] });
  }

  async clearCart(cartId: number): Promise<void> {
    await this.cartItemsRepository.delete({ cart: { id: cartId } });
  }


 

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
