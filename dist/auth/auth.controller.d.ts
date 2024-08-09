import { AuthService } from './auth.service';
import { RegisterDTO } from '../dto/Register';
import { LoginDTO } from '../dto/Login';
import { UpdateUserDTO } from '../dto/UpdateUser';
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
    UpdateUser(id: string, userUpdated: UpdateUserDTO): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    getUserById(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
