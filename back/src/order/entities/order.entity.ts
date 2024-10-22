
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Orderitem } from '../../orderitem/entities/orderitem.entity';

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  @Column({ default: 'PENDING' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Orderitem, (orderItem) => orderItem.order)
  items: Orderitem[];
}
