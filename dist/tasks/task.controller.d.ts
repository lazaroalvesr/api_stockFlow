import { TasksDTO } from '../dto/Tasks';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(task: TasksDTO): Promise<{
        id: string;
        nome: string;
        text: string;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        nome: string;
        text: string;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    update(id: string, task: UpdateTaskDTO): Promise<{
        id: string;
        nome: string;
        text: string;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        nome: string;
        text: string;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
}
