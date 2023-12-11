import { UserRegisteredEvent } from '@entities/event';
import { User } from '@entities/user.entity';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { UserMongoRepository } from '@infrastructure/persistance/mongo/user-mongo-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegisterService {
  constructor(private readonly userRepository: UserMongoRepository, private readonly eventBus: EventBusService) { }

  async registerUser(email: string, username: string): Promise<User> {
    const user = new User({ email, username });
    await this.userRepository.save(user);
    const registeredUser: UserRegisteredEvent = { type: 'user.registered' as any, payload: { email, username } };
    this.eventBus.publish(registeredUser);
    return user;
  }
}