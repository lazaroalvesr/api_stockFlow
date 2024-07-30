import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FolderModule } from './folders/folder.module';
import { TaskModule } from './tasks/task.module';

@Module({
  imports: [AuthModule, FolderModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
