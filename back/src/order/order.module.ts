import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { User } from '../users/entities/user.entity';
import { Orderitem } from '../orderitem/entities/orderitem.entity';
import { Order } from './entities/order.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Order, Orderitem, User])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
