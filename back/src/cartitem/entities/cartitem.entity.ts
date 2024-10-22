import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';
import { Product } from '../../products/entities/product.entity';


@Entity()
export class Cartitem {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.items, { onDelete: 'CASCADE' })
  cart: Cart;

  @ManyToOne(() => Product, { onDelete: 'RESTRICT' })
  product: Product;

  @Column()
  quantity: number;
}
