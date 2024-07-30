import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class FolderDTO {

    @IsNotEmpty()
    @IsEmail()
    nome: string

    @IsNotEmpty()
    @IsString()
    usuarioId: string
}