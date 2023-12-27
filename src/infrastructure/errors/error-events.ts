import { ErrorHandler } from '@nestjs/common/interfaces/http/http-server.interface';
import { UserAlreadyExistsException } from './custom-exception.class';

export class ErrorEvents {
  private readonly errorHandler: ErrorHandler;

  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;
  }

  emitUserAlreadyExistsEvent(error: UserAlreadyExistsException) {
    const errorMessage = 'User with username already exists: ' + error.username;
    this.errorHandler.handleError(new Error(errorMessage)); // Emit a generic error event
  }

  // Additional events for other error scenarios
}