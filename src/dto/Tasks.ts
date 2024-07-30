import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class TasksDTO {

    @IsNotEmpty()
    @IsEmail()
    nome: string

    @IsNotEmpty()
    @IsString()
    text: string

    @IsNotEmpty()
    @IsString()
    pastaId: string
}