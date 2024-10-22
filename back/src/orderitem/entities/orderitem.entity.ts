import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Orderitem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
    order: Order;
  
    @ManyToOne(() => Product, { onDelete: 'RESTRICT' })
    product: Product;
  
    @Column()
    quantity: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price_at_order: number;

}
