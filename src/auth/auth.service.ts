import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { Login, Register } from '../lib/interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDTO } from '../dto/UpdateUser';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private readonly prismaService: PrismaService
    ) { }

    async login({ email, senha }: Login) {
        try {
            const user = await this.prismaService.usuario.findFirst({
                where: {
                    email,
                },
            });

            if (!user) {
                throw new BadRequestException('Email ou senha inválido.');
            }

            const PasswordMathc = await bcrypt.compare(senha, user.senha);

            if (!PasswordMathc) {
                throw new BadRequestException('Email ou senha estão inválidos!');
            }

            const { senha: _, ...userSemSenha } = user;
            const payload = { ...userSemSenha };

            const acess_token = await this.jwtService.signAsync(payload);

            return { user: payload, acess_token: acess_token };
        } catch (error) {
            throw new BadRequestException('Erro ao fazer Login!');
        }
    }

    async create({ nome, email, senha }: Register) {
        try {
            const existingUser = await this.prismaService.usuario.findUnique({
                where: {
                    email,
                },
            });

            if (existingUser) throw new BadRequestException('Email já em uso!');

            const PasswordHash = await bcrypt.hash(senha, 10);

            const user = await this.prismaService.usuario.create({
                data: {
                    nome,
                    email,
                    senha: PasswordHash,
                },
            });

            const { senha: _, ...userSemSenha } = user;
            const payload = { ...userSemSenha };

            const acess_token = await this.jwtService.signAsync(payload);

            return { user: payload, acess_token: acess_token };
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }

            throw new Error(error)
        }
    }

    async getAll() {
        try {
            const users = await this.prismaService.usuario.findMany();

            const usersWithoutPassword = users.map(({ senha, ...user }) => user);
            return usersWithoutPassword.map((user, index) => ({
                user,
            }));
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            throw new InternalServerErrorException('Erro ao buscar todos os usuários');
        }
    }

    async updateUser(id: string, userUpdate: UpdateUserDTO) {
        try {
            const update = await this.prismaService.usuario.update({
                where: { id },
                data: userUpdate
            })
            const { senha: _, ...userSemSenha } = update;

            const payload = { ...userSemSenha };

            const acess_token = await this.jwtService.signAsync(payload);
            
            return { user: payload, acess_token: acess_token };
        } catch (e) {
            console.log('erro ao atualizar infos do user')
            throw new InternalServerErrorException("Erro ao atualizar infos do user")
        }
    }

    async getById(id: string) {
        try {
            if (!id) {
                throw new BadRequestException("Erro ao buscar Usuário: Id não existe!");
            }

            const user = await this.prismaService.usuario.findFirst({
                where: { id },
            });

            if (!user) {
                throw new BadRequestException("Usuário não encontrado");
            }

            const { senha, ...userWithoutPassword } = user;

            return userWithoutPassword;
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }

            console.error('Erro ao buscar usuário por ID:', error);
            throw new InternalServerErrorException('Erro ao buscar Usuário: Id não existe!');
        }
    }

    async delete(id: string) {
        return this.prismaService.usuario.delete({
            where: { id }
        })
    }
}
