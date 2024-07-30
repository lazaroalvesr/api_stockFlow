import { Module } from '@nestjs/common';
import { FolderService } from './folder.service';
import { FolderController } from './folder.controller';
import { PrismaService } from '../db/prisma.service';

@Module({
  providers: [FolderService, PrismaService],
  controllers: [FolderController]
})
export class FolderModule {}
