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
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
        usuarioId: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        nome: string;
        text: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
        usuarioId: string;
    }>;
    getTasksByUser(userId: string): Promise<({
        pasta: {
            id: string;
            nome: string;
            created_at: Date;
            updated_at: Date;
            usuarioId: string;
        };
    } & {
        id: string;
        nome: string;
        text: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
        usuarioId: string;
    })[]>;
    update(id: string, task: UpdateTaskDTO): Promise<{
        id: string;
        nome: string;
        text: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
        usuarioId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        nome: string;
        text: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
        usuarioId: string;
    }>;
}
