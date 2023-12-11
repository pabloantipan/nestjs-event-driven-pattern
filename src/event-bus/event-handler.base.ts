import { Observable, Subject, tap } from 'rxjs';

export abstract class EventHandlerBase {
  protected readonly eventStream$ = new Subject();

  protected publishEvent(event: any): void {
    this.eventStream$.next(event);
  }

  protected abstract handleEvent(event: any): void;

  subscribe(): Observable<any> {
    return this.eventStream$.pipe(
      // You can add additional RxJS operators here for filtering, transformation, etc.
      //filter((event) => event instanceof SpecificEventType),
      //map((event) => event.data),
      tap((event) => this.handleEvent(event)),
    );
  }
}
