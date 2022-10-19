import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

// hide routes behind guard that requires jwt to get through
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  // Use custom decorator to get user info from http request
  getMe(@GetUser() user: User) {
    return user;
  }
}
