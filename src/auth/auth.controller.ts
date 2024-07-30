import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from '../dto/Register';
import { LoginDTO } from '../dto/Login';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('create')
    criar(@Body() user: RegisterDTO) {
        return this.authService.create(user)
    }

    @Post('login')
    login(@Body() user: LoginDTO) {
        return this.authService.login(user)
    }

    @Get("userAll")
    getAllUser() {
        return this.authService.getAll()
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.authService.getById(id)
    }
}
