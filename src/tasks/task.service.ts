import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { UpdateTaskDTO } from '../dto/UpdateTask';
import { Tarefas } from '../lib/interface';

@Injectable()
export class TaskService {
    constructor(private readonly prismaService: PrismaService) { }

    async create({ nome, text, pastaId }: Tarefas) {
        if (!pastaId) {
            throw new BadRequestException("Erro ao buscar Pasta: Id não existe!");
        }

        const create = await this.prismaService.tarefa.create({
            data: {
                nome,
                text,
                pastaId
            }
        })

        return create
    }

    async getById(id: string) {
        if (!id) {
            throw new BadRequestException("Erro ao buscar id: Id não existe!");
        }

        const getById = await this.prismaService.tarefa.findFirst({
            where: {
                id
            }
        })

        return getById
    }

    async updated(id: string, updateTask: UpdateTaskDTO) {
        if (!id) {
            throw new BadRequestException("Erro ao buscar id: Id não existe!");
        }

        const getById = await this.prismaService.tarefa.update({
            where: { id },
            data: updateTask
        })

        return getById
    }

    async delete(id: string) {
        if (!id) {
            throw new BadRequestException("Erro ao buscar id: Id não existe!");
        }

        return await this.prismaService.tarefa.delete({
            where: { id }
        })
    }

}
