import { IsOptional, IsString } from "class-validator";

export class UpdateUserDTO {

    @IsOptional()
    @IsString()
    nome: string

    @IsOptional()
    @IsString()
    email: string
}