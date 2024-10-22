import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Cart } from '../cart/entities/cart.entity';
import { Order } from '../order/entities/order.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User, Cart, Order])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], 
})
export class UsersModule {}
