import { Body, Controller, HttpCode, HttpStatus, Post } from
    '@nestjs/common';
import { AuthService } from '@project-manager-api/infrastructure/auth/auth.service';
import { Public } from '@project-manager-api/gateways/guards/auth-guard.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @Public()
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto.email, loginDto.password);
    }
}