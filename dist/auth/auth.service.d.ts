import { PrismaService } from '../db/prisma.service';
import { Login, Register } from '../lib/interface';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDTO } from '../dto/UpdateUser';
export declare class AuthService {
    private jwtService;
    private readonly prismaService;
    constructor(jwtService: JwtService, prismaService: PrismaService);
    login({ email, senha }: Login): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    create({ nome, email, senha }: Register): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    getAll(): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
    }[]>;
    updateUser(id: string, userUpdate: UpdateUserDTO): Promise<{
        user: {
            id: string;
            nome: string;
            email: string;
            created_at: Date;
            updated_at: Date;
        };
        acess_token: string;
    }>;
    getById(id: string): Promise<{
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
