import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserAlreadyExistsException } from './custom-exception.class';
import { ErrorBusService } from './error-bus';

@Injectable()
export class ErrorHandler implements OnModuleInit {

  constructor(
    private readonly bus: ErrorBusService,
  ) { }

  onModuleInit() {
    this.bus.subscribe('HttpException').subscribe((exception: UserAlreadyExistsException) => {
      this.handleError(exception);
    });
  }

  private handleError(error: any): any {
    console.log(`ErrorHandlingService.handleError()`, error);

    if (error instanceof UserAlreadyExistsException) {
      return this.handleUserAlreadyExistsException(error);
    }
  }

  private handleUserAlreadyExistsException(error: UserAlreadyExistsException) {
    console.log(`ErrorHandlingService.handleUserAlreadyExistsException()`, error);
  }
}
