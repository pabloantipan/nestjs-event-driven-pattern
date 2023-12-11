import { UserRegistrationDto } from '@domain/dto/user-registration.dto';
import { UserRegisterService } from '@infrastructure/http/services/user-register-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly userRegisterService: UserRegisterService) { }

  async execute(userRegistrationDto: UserRegistrationDto): Promise<void> {
    // Validate user input data
    // ... (e.g., email format, username length)

    try {
      await this.userRegisterService.registerUser(userRegistrationDto.email, userRegistrationDto.username);
    } catch (error) {
      // Handle potential errors during registration
      // ... (e.g., user already exists, database error)
      throw error; // Rethrow the error for further processing
    }
  }
}
