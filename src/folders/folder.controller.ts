import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FolderDTO } from '../dto/Folder';
import { FolderService } from './folder.service';
import { UpdatePastaDTO } from '../dto/UpdatePasta';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('folder')
export class FolderController {
    constructor(private readonly folderService: FolderService) { }

    @UseGuards(JwtAuthGuard)
    @Post("create")
    create(@Body() folder: FolderDTO) {
        return this.folderService.create(folder)
    }

    @Get('getAll/:userId')
    getAll(@Param('userId') userId: string) {
        return this.folderService.buscarTodas(userId);
    }
    
    @Get(":id")
    getById(@Param("id") id: string) {
        return this.folderService.buscarPorID(id)
    }

    @Put(":id")
    updated(@Param("id") id: string, @Body() pastaAtualizada: UpdatePastaDTO) {
        return this.folderService.atualizar(id, pastaAtualizada)
    }

    @Delete(":id")
    deleteById(@Param("id") id: string) {
        return this.folderService.Delete(id)
    }
}
