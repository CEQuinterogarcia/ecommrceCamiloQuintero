import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { User } from '../users/entities/user.entity';
import { Cartitem } from 'src/cartitem/entities/cartitem.entity';
import { Cart } from './entities/cart.entity';
import { ProductsModule } from '../products/products.module';


@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([User, Cart, Cartitem])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
