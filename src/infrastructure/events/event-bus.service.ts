import { Event, EventType } from '@domain/interfaces/event.interface';
import { Injectable } from '@nestjs/common';
import { Observable, Subject, filter, map } from 'rxjs';

@Injectable()
export class EventBusService {
  private readonly subject = new Subject<any>();

  constructor() { }

  publish<T>(event: T): void {
    console.log(`EventBusService.publish()`);
    this.subject.next(event);
  }

  subscribe<T>(type: EventType): Observable<T> {
    return this.subject.pipe(
      filter((event: Event) => event.type === type),
      map((event: Event) => event.payload),
    );
  }

}

// @Injectable()
// export class UserService {
//   constructor(private readonly eventBus: EventBusService) { }

//   public async register(email: string, username: string) {
//     // ... register user logic

//     const event: Event = {
//       type: EventType.UserRegistered,
//       payload: { email, username },
//     };

//     this.eventBus.publish(event);
//   }

// }
