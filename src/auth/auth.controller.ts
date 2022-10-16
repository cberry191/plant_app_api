import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// how to handle all requests to /auth
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  // how to handle all post requests that arrive at /auth/signup
  @Post('signup')
  // run this function that requires a
  // data transfer object of the defined shape
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
}
