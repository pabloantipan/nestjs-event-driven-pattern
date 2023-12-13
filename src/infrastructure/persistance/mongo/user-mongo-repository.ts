/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserMongoRepository implements UserRepository {
  constructor(private readonly userRepository: MongoRepository<User>) { }
  // constructor(@InjectRepository(User) private readonly userRepository: MongoRepository<User>) { }

  async save(user: User): Promise<any> {
    console.log('UserMongoRepository.save()');
    return await this.userRepository.save(user);
    return;
  }

  async findById(id: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
    return null;
  }
}