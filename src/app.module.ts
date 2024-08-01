import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FolderModule } from './folders/folder.module';
import { TaskModule } from './tasks/task.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [AuthModule, FolderModule, TaskModule, ConfigModule.forRoot({
    validationSchema: Joi.object({
      FRONTEND_URL: Joi.string().uri().required(),
    }),
    isGlobal: true,
  }),
  ],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule { }
