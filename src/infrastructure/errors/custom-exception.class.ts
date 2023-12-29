import { HttpException, HttpStatus } from '@nestjs/common';

export class NoHttpException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}

export class UserAlreadyExistsException extends NoHttpException {
  public username: string;

  constructor(username: string) {
    super('User with username already exists', HttpStatus.CONFLICT);
    this.username = username; // Add username property for context
  }
}
