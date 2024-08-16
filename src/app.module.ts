import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FolderModule } from './folders/folder.module';
import { TaskModule } from './tasks/task.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, FolderModule, TaskModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }],
})
export class AppModule { }
