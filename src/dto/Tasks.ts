import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TasksDTO {
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    text: string

    @IsBoolean()
    perecivel: boolean;

    @IsOptional()
    @IsDate()
    dataValidade?: Date;

    @IsDate()
    dataFabricacao?: Date;
}