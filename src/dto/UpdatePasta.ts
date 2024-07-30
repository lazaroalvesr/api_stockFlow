import {  IsNotEmpty, IsString } from "class-validator";

export class UpdatePastaDTO {

    @IsNotEmpty()
    @IsString()
    nome: string
}