import { RegisterUserUseCase } from '@domain/use_cases/register-user.use-case';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { UserController } from '@infrastructure/http/controllers/user-controller';
import { UserRegisterService } from '@infrastructure/http/services/user-register-service';
import { UserMongoRepository } from '@infrastructure/persistance/mongo/user-mongo-repository';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
  ],
  providers: [
    AppService,
    EventBusService,
    UserRegisterService,
    RegisterUserUseCase,
    UserMongoRepository,
  ],
})
export class AppModule { }
