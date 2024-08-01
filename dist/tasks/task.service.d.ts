import { PrismaService } from '../db/prisma.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';
import { Tarefas } from '../lib/interface';
export declare class TaskService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(task: Tarefas): Promise<{
        id: string;
        nome: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        nome: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    update(id: string, task: UpdateTaskDTO): Promise<{
        id: string;
        nome: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        nome: string;
        perecivel: boolean;
        dataValidade: Date | null;
        dataFabricacao: Date | null;
        created_at: Date;
        updated_at: Date;
        pastaId: string;
    }>;
}
