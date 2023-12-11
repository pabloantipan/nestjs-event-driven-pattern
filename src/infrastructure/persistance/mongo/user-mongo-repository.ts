import { User } from '@domain/entities/user.entity';
import { UserRepository } from '@domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { MongoRepository } from 'typeorm';

@Injectable()
export class UserMongoRepository implements UserRepository {
  // constructor(@InjectRepository(User) private readonly userRepository: MongoRepository<User>) { }

  async save(user: User): Promise<void> {
    // await this.userRepository.save(user);
    return;
  }

  async findById(id: string): Promise<User | null> {
    // return await this.userRepository.findOne({ where: { id } });
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    // return await this.userRepository.findOne({ where: { email } });
    return null;
  }
}