import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksDTO } from '../dto/Tasks';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

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
        return this.taskService.updated(id, task)
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        return this.taskService.delete(id)
    }
}
