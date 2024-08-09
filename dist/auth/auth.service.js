"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, prismaService) {
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    async login({ email, senha }) {
        try {
            const user = await this.prismaService.usuario.findFirst({
                where: {
                    email,
                },
            });
            if (!user) {
                throw new common_1.BadRequestException('Email ou senha inválido.');
            }
            const PasswordMathc = await bcrypt.compare(senha, user.senha);
            if (!PasswordMathc) {
                throw new common_1.BadRequestException('Email ou senha estão inválidos!');
            }
            const { senha: _, ...userSemSenha } = user;
            const payload = { ...userSemSenha };
            const acess_token = await this.jwtService.signAsync(payload);
            return { user: payload, acess_token: acess_token };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao fazer Login!');
        }
    }
    async create({ nome, email, senha }) {
        try {
            const existingUser = await this.prismaService.usuario.findUnique({
                where: {
                    email,
                },
            });
            if (existingUser)
                throw new common_1.BadRequestException('Email já em uso!');
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
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new Error(error);
        }
    }
    async getAll() {
        try {
            const users = await this.prismaService.usuario.findMany();
            const usersWithoutPassword = users.map(({ senha, ...user }) => user);
            return usersWithoutPassword.map((user, index) => ({
                user,
            }));
        }
        catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            throw new common_1.InternalServerErrorException('Erro ao buscar todos os usuários');
        }
    }
    async updateUser(id, userUpdate) {
        try {
            const update = await this.prismaService.usuario.update({
                where: { id },
                data: userUpdate
            });
            return update;
        }
        catch (e) {
            console.log('erro ao atualizar infos do user');
            throw new common_1.InternalServerErrorException("Erro ao atualizar infos do user");
        }
    }
    async getById(id) {
        try {
            if (!id) {
                throw new common_1.BadRequestException("Erro ao buscar Usuário: Id não existe!");
            }
            const user = await this.prismaService.usuario.findFirst({
                where: { id },
            });
            if (!user) {
                throw new common_1.BadRequestException("Usuário não encontrado");
            }
            const { senha, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('Erro ao buscar usuário por ID:', error);
            throw new common_1.InternalServerErrorException('Erro ao buscar Usuário: Id não existe!');
        }
    }
    async delete(id) {
        return this.prismaService.usuario.delete({
            where: { id }
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map