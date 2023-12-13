import { UserRegistrationDto } from "@domain/dto/user-registration.dto";
import { RegisterUserUseCase } from "@domain/use_cases/register-user.use-case";
import { Body, Controller, Post } from "@nestjs/common";

@Controller('user')
export class UserController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) { }

  @Post('register')
  public async register(@Body() body: UserRegistrationDto) {
    const { email, username, password } = body;

    await this.registerUserUseCase.execute({ email, username, password });

    // await this.userService.register(email, username);
    // res.status(201).send();\
  }
}