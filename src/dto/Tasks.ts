import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TasksDTO {
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    text: string

    @IsBoolean()
    perecivel: boolean;

    @IsString()
    pastaId: string

    @IsDate()
    dataValidade: string;
    
    @IsOptional()
    @IsDate()
    dataFabricacao?: string;

    @IsNotEmpty()
    @IsString()
    usuarioId: string
}