import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderitemService } from './orderitem.service';
import { OrderitemController } from './orderitem.controller';
import { Order } from '../order/entities/order.entity';
import { Product } from '../products/entities/product.entity';
import { Orderitem } from './entities/orderitem.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Order, Product, Orderitem])],
  controllers: [OrderitemController],
  providers: [OrderitemService],
})
export class OrderitemModule {}
