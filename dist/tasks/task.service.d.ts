import { PrismaService } from '../db/prisma.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';
import { Tarefas } from '../lib/interface';
export declare class TaskService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create({ nome, text, pastaId }: Tarefas): Promise<{
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
    updated(id: string, updateTask: UpdateTaskDTO): Promise<{
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
