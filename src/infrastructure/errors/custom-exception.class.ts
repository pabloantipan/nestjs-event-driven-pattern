import { HttpException, HttpStatus } from '@nestjs/common';

export class NoHttpException extends HttpException {
  public username: string;

  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}

export class UserAlreadyExistsException extends NoHttpException {
  constructor(username: string) {
    super('User with username already exists', HttpStatus.CONFLICT);
    this.username = username; // Add username property for context
  }
}