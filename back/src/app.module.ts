import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { CartitemModule } from './cartitem/cartitem.module';
import { OrderitemModule } from './orderitem/orderitem.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { Cartitem } from './cartitem/entities/cartitem.entity';
import { Order } from './order/entities/order.entity';
import { Orderitem } from './orderitem/entities/orderitem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ecommerceangular',
      entities: [User, Product, Cart, Cartitem, Order, Orderitem],
      synchronize: true, // NO USAR EN PRODUCCIÓN
    }),
    TypeOrmModule.forFeature([User, Product, Cart, Cartitem, Order, Orderitem]),
    UsersModule, ProductsModule, CartModule, OrderModule, CartitemModule, OrderitemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
