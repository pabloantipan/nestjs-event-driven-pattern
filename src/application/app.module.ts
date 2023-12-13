import { RegisterUserUseCase } from '@domain/use_cases/register-user.use-case';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { UserController } from '@infrastructure/http/controllers/user-controller';
import { UserRegisterService } from '@infrastructure/http/services/user-register-service';
import { UserMongoRepository } from '@infrastructure/persistance/mongo/user-mongo-repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: 'pablo',
      password: '123pablo',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // ssl: false,
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
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
    MongoRepository,
  ],
})
export class AppModule { }
