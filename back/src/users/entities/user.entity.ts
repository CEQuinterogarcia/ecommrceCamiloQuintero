import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';
import { Order } from '../../order/entities/order.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    username: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[];
  
    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];

}
