import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartitemService } from './cartitem.service';
import { CartitemController } from './cartitem.controller';
import { Cart } from '../cart/entities/cart.entity';
import { Product } from '../products/entities/product.entity';
import { Cartitem } from './entities/cartitem.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Cart, Cartitem, Product])],
  controllers: [CartitemController],
  providers: [CartitemService],
})
export class CartitemModule {}
