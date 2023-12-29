/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '@domain/classes/user';
import { UserEntity } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoBulkWriteError, MongoError } from 'mongodb';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UserMongoRepository implements UserRepository {
  // constructor(private readonly userRepository: MongoRepository<User>) { }
  constructor(@InjectRepository(UserEntity) private readonly userRepository: MongoRepository<UserEntity>) { }

  async save(user: User): Promise<any> {
    console.log('UserMongoRepository.save()', user);
    // this.userRepository.create(user);
    console.log(MongoError.prototype instanceof Error);

    return await this.userRepository.save(user)
      .catch((error) => {
        if (error instanceof MongoBulkWriteError) {
          console.log('save()', error)
        }
        // console.log('UserMongoRepository.save() error', error);
      });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async delete(id: string): Promise<any> {
    return await this.userRepository.delete({ id });
  }

  async update(user: User): Promise<any> {
    if (!user.id) {
      return null;
    }
    return await this.userRepository.update({ id: user.id }, user);
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