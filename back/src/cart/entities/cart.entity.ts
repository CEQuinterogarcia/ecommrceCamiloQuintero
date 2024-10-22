import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Cartitem } from '../../cartitem/entities/cartitem.entity';

@Entity()
export class Cart {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.carts, { onDelete: 'CASCADE' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Cartitem, (cartItem) => cartItem.cart)
  items: Cartitem[];
}
