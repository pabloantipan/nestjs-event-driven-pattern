import { UserEntity } from '@domain/entities/user.entity';
import { RegisterUserUseCase } from '@domain/use_cases/register-user.use-case';
import { EventBusService } from '@infrastructure/events/event-bus.service';
import { UserController } from '@infrastructure/http/controllers/user-controller';
import { UserRegisterService } from '@infrastructure/http/services/user-register-service';
import { UserMongoRepository } from '@infrastructure/persistance/mongo/user-mongo-repository';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: process.env.MONGO_DB_USER || 'root',
      password: process.env.MONGO_DB_PASSWORD || 'example',
      database: process.env.MONGO_DB_DATABASE || 'admin',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // ssl: false,
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
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
