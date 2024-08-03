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
exports.FolderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let FolderService = class FolderService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create({ nome, usuarioId }) {
        try {
            const nomeExistingue = await this.prismaService.pasta.findUnique({
                where: {
                    nome
                }
            });
            if (nomeExistingue) {
                throw new common_1.BadRequestException("Erro ao criar pasta: Nome já em uso!");
            }
            const createFolder = await this.prismaService.pasta.create({
                data: {
                    nome,
                    usuarioId
                }
            });
            return createFolder;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Erro ao criar pasta, por favor, tente novamente mais tarde.');
        }
    }
    async buscarTodas(userId) {
        const getAll = await this.prismaService.pasta.findMany({
            where: {
                usuarioId: userId,
            },
            include: {
                _count: {
                    select: {
                        Tarefa: true,
                    },
                },
            },
        });
        return getAll;
    }
    async buscarPorID(id) {
        const getById = await this.prismaService.pasta.findFirst({
            where: {
                id
            }, include: {
                Tarefa: true
            }
        });
        return getById;
    }
    async atualizar(id, dadosAtt) {
        try {
            if (!id) {
                throw new common_1.BadRequestException("ID da pasta é necessário para a atualização.");
            }
            const pastaAtt = await this.prismaService.pasta.update({
                where: { id },
                data: dadosAtt
            });
            return pastaAtt;
        }
        catch (error) {
            if (error instanceof common_1.BadGatewayException) {
                throw new common_1.BadRequestException("Erro ao atualizar a pasta.");
            }
            throw new common_1.InternalServerErrorException("Erro interno ao atualizar a pasta.");
        }
    }
    async Delete(id) {
        return this.prismaService.pasta.delete({
            where: {
                id
            }
        });
    }
};
exports.FolderService = FolderService;
exports.FolderService = FolderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FolderService);
//# sourceMappingURL=folder.service.js.map