import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDTO {

    @IsNotEmpty()
    @IsString()
    nome: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    senha: string
}