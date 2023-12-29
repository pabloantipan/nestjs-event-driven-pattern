import { User } from '@domain/classes/user';
import { UserRegisteredEvent } from '@entities/event';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { UserMongoRepository } from '@infrastructure/persistance/mongo/user-mongo-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegisterService {
  constructor(private readonly userRepository: UserMongoRepository, private readonly eventBus: EventBusService) { }

  async registerUser(email: string, username: string, password: string): Promise<User> {
    const user = new User({ email, username, password });
    await this.userRepository.save(user as any);
    const registeredUser: UserRegisteredEvent = { type: 'user.registered' as any, payload: { email, username } };
    this.eventBus.publish(registeredUser);
    return user;
  }
}