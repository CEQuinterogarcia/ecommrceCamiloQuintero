import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  async createUser(username: string, email: string, password: string): Promise<User> {
    const user = this.usersRepository.create({ username, email, password });
    return await this.usersRepository.save(user);
  }

  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
