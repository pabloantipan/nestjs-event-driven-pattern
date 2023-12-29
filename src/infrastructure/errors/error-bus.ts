import { HttpException, Injectable } from '@nestjs/common';
import { Observable, Subject, filter, map } from 'rxjs';

@Injectable()
export class ErrorBusService {
  private readonly subject = new Subject<HttpException>();

  constructor() { }

  publish(exception: HttpException): void {
    console.log(`ErrorBusService.publish()`);
    this.subject.next(exception);
  }

  subscribe(type: string): Observable<HttpException> {
    return this.subject.pipe(
      filter((exception: HttpException) => exception.name === type),
      map((exception: HttpException) => exception),
    );
  }
}