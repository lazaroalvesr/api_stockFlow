import {  IsNotEmpty, IsString } from "class-validator";

export class UpdateTaskDTO {

    @IsNotEmpty()
    @IsString()
    nome: string

    @IsNotEmpty()
    @IsString()
    text: string
}