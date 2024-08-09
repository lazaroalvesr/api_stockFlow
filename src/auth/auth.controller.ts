import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from '../dto/Register';
import { LoginDTO } from '../dto/Login';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from '../lib/public.decorator';
import { UpdateUserDTO } from '../dto/UpdateUser';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('create')
    @Public()
    criar(@Body() user: RegisterDTO) {
        return this.authService.create(user)
    }

    @Post('login')
    @Public()
    login(@Body() user: LoginDTO) {
        return this.authService.login(user)
    }

    @Get("userAll")
    @UseGuards(JwtAuthGuard)
    getAllUser() {
        return this.authService.getAll()
    }

    @Put("update/:id")
    @UseGuards(JwtAuthGuard)
    UpdateUser(@Param("id") id: string, @Body() userUpdated: UpdateUserDTO) {
        return this.authService.updateUser(id, userUpdated)
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.authService.getById(id)
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.authService.delete(id)
    }
}
