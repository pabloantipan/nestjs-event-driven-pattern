/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { ErrorHandler } from '@nestjs/common/interfaces';
import { UserAlreadyExistsException } from './custom-exception.class';
import { ErrorEvents } from './error-events';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {
  private readonly logger = new Logger(ErrorHandlingService.name);
  private readonly errorEvents: ErrorEvents;

  constructor(errorEvents: ErrorEvents) {
    this.errorEvents = errorEvents;
  }

  handleError(error: any, req: any, res: any, next: () => void): any {
    this.logger.error(error);

    if (error instanceof UserAlreadyExistsException) {
      this.errorEvents.emitUserAlreadyExistsEvent(error);
    } else {
      // Handle other errors (e.g., logging, notifications)
    }
  }
}
