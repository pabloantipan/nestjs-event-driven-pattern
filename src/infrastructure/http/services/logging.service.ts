import { EventType, UserLoggingEvent } from '@domain/interfaces/event.interface';
import { ErrorBusService } from '@infrastructure/errors/error-bus';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
  constructor(
    private readonly eventBus: EventBusService,
    private readonly errorBus: ErrorBusService,
  ) { }

  public async init() {
    this.eventBus.subscribe<UserLoggingEvent>(EventType.UserLoggedIn).subscribe((event) => {
      console.log(`User ${event.payload.username} registered with email ${event.payload.email}`);
    });

    this.errorBus.subscribe('HttpException').subscribe((exception) => {
      console.log(`Error ${exception.name} with message ${exception.message}`);
    });


  }
}
