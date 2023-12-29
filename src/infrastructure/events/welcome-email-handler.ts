import { EventType, UserRegisteredEvent } from '@domain/interfaces/event.interface';
import { Injectable } from '@nestjs/common';
import { EventBusService } from './event-bus.service';
import { EventHandlerBase } from './event-handler.base';

@Injectable()
export class WelcomeEmailHandler extends EventHandlerBase {
  protected handleEvent(event: UserRegisteredEvent): void {
    console.log(`New user registered: ${event.payload.email}`);
    this.sendWelcomeEmail(event.payload.email);
  }

  private async sendWelcomeEmail(email: string) {
    // ... send welcome email logic using your chosen service ...
    console.log(`Sending welcome email to ${email}`);
  }

  subscribeToEvents(eventBus: EventBusService): void {
    eventBus.subscribe<UserRegisteredEvent>(EventType.UserRegistered).subscribe((event) => {
      this.publishEvent(event);
    });
  }
}