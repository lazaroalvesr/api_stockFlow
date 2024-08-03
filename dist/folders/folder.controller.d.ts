import { FolderDTO } from '../dto/Folder';
import { FolderService } from './folder.service';
import { UpdatePastaDTO } from '../dto/UpdatePasta';
export declare class FolderController {
    private readonly folderService;
    constructor(folderService: FolderService);
    create(folder: FolderDTO): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    getAll(userId: string): Promise<({
        _count: {
            Tarefa: number;
        };
    } & {
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    })[]>;
    getById(id: string): Promise<{
        Tarefa: {
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
        }[];
    } & {
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    updated(id: string, pastaAtualizada: UpdatePastaDTO): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
    deleteById(id: string): Promise<{
        id: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
        usuarioId: string;
    }>;
}
