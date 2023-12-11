import { UserRepository } from '@domain/repositories/user-repository.interface';
import { UserRegisteredEvent } from '@entities/event';
import { User } from '@entities/user.entity';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegisterService {
  constructor(private readonly userRepository: UserRepository, private readonly eventBus: EventBusService) { }

  async registerUser(email: string, username: string): Promise<User> {
    const user = new User({ email, username });
    await this.userRepository.save(user);
    const registeredUser: UserRegisteredEvent = { type: 'user.registered' as any, payload: { email, username } };
    this.eventBus.publish(registeredUser);
    return user;
  }
}