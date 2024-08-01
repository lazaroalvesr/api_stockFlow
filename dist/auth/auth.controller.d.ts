import { AuthService } from './auth.service';
import { RegisterDTO } from '../dto/Register';
import { LoginDTO } from '../dto/Login';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    criar(user: RegisterDTO): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    login(user: LoginDTO): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    getAllUser(): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        created_at: Date;
        updated_at: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
