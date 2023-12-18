/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from '@domain/repositories/user-repository.interface';
import { User, UserEntity } from '@entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserMongoRepository implements UserRepository {
  // constructor(private readonly userRepository: MongoRepository<User>) { }
  constructor(@InjectRepository(UserEntity) private readonly userRepository: MongoRepository<UserEntity>) { }

  async save(user: User): Promise<any> {
    console.log('UserMongoRepository.save()', user);
    // this.userRepository.create(user);
    return await this.userRepository.save(user)
      .catch((error) => {
        console.log('UserMongoRepository.save() error', error);
      });
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