import { BadGatewayException, BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { UpdatePastaDTO } from '../dto/UpdatePasta';
import { Folder } from '../lib/interface';

@Injectable()
export class FolderService {
    constructor(private readonly prismaService: PrismaService) { }

    async create({ nome, usuarioId }: Folder) {
        try {
            const createFolder = await this.prismaService.pasta.create({
                data: {
                    nome,
                    usuarioId
                }
            });

            return createFolder;
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }

            throw new InternalServerErrorException('Erro ao criar pasta, por favor, tente novamente mais tarde.');
        }
    }
    async buscarTodas(userId: string) {
        const getAll = await this.prismaService.pasta.findMany({
            where: {
                usuarioId: userId, // Certifique-se de que 'usuarioId' é o campo correto no seu modelo
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


    async buscarPorID(id: string) {
        const getById = await this.prismaService.pasta.findFirst({
            where: {
                id
            }, include: {
                Tarefa: true
            }
        })

        return getById
    }

    async atualizar(id: string, dadosAtt: UpdatePastaDTO) {
        try {
            if (!id) {
                throw new BadRequestException("ID da pasta é necessário para a atualização.");
            }
            const pastaAtt = await this.prismaService.pasta.update({
                where: { id },
                data: dadosAtt
            })

            return pastaAtt
        } catch (error) {
            if (error instanceof BadGatewayException) {
                throw new BadRequestException("Erro ao atualizar a pasta.");
            }
            throw new InternalServerErrorException("Erro interno ao atualizar a pasta.");
        }
    }

    async Delete(id: string) {
        return this.prismaService.pasta.delete({
            where: {
                id
            }
        })
    }
}
