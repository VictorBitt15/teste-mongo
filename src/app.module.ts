import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports:[UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/nest')],
})
export class AppModule {}

