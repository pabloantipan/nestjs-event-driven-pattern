import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserRegistrationDto {

  @IsNotEmpty()
  public username: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public password: string;
}