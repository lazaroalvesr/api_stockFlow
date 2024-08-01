import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TasksDTO } from '../dto/Tasks';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @UseGuards(JwtAuthGuard)
    @Post("create")
    create(@Body() task: TasksDTO) {
        return this.taskService.create(task)
    }

    @Get(":id")
    getById(@Param('id') id: string) {
        return this.taskService.getById(id)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() task: UpdateTaskDTO) {
        return this.taskService.update(id, task)
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        return this.taskService.delete(id)
    }
}
