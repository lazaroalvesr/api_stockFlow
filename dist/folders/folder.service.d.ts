import { PrismaService } from '../db/prisma.service';
import { UpdatePastaDTO } from '../dto/UpdatePasta';
import { Folder } from '../lib/interface';
export declare class FolderService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create({ nome, usuarioId }: Folder): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    buscarTodas(): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }[]>;
    buscarPorID(id: string): Promise<{
        Tarefa: {
            id: string;
            nome: string;
            text: string;
            created_at: Date;
            updated_at: Date;
            pastaId: string;
        }[];
    } & {
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    atualizar(id: string, dadosAtt: UpdatePastaDTO): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    Delete(id: string): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
}
