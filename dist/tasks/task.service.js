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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let TaskService = class TaskService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create({ nome, text, pastaId }) {
        if (!pastaId) {
            throw new common_1.BadRequestException("Erro ao buscar Pasta: Id não existe!");
        }
        const create = await this.prismaService.tarefa.create({
            data: {
                nome,
                text,
                pastaId
            }
        });
        return create;
    }
    async getById(id) {
        if (!id) {
            throw new common_1.BadRequestException("Erro ao buscar id: Id não existe!");
        }
        const getById = await this.prismaService.tarefa.findFirst({
            where: {
                id
            }
        });
        return getById;
    }
    async updated(id, updateTask) {
        if (!id) {
            throw new common_1.BadRequestException("Erro ao buscar id: Id não existe!");
        }
        const getById = await this.prismaService.tarefa.update({
            where: { id },
            data: updateTask
        });
        return getById;
    }
    async delete(id) {
        if (!id) {
            throw new common_1.BadRequestException("Erro ao buscar id: Id não existe!");
        }
        return await this.prismaService.tarefa.delete({
            where: { id }
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map