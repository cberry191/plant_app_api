import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  // LOG IN

  async login(dto: AuthDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // throw exception if no match
    if (!user) throw new ForbiddenException('Account not found');

    // compare passowrd
    const pwMatches = await argon.verify(user.hash, dto.password);

    // throw exception if no match
    if (!pwMatches) throw new ForbiddenException('Bad password');

    // return signed token generated from id and email
    return this.signToken(user.id, user.email);
  }

  // SIGN UP

  async signup(dto: AuthDto) {
    try {
      // generate password hash
      const hash = await argon.hash(dto.password);

      // save new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Account with that email already created',
          );
        }
      }
    }
  }

  // SIGN TOKEN
  // Generates access_token for user to pass to API upon requests

  async signToken(
    userId: Number,
    email: string,
  ): Promise<{ access_token: string }> {
    // payload object to store user info
    const payload = {
      sub: userId,
      email,
    };

    // jwt secret from .env
    const secret = this.config.get('JWT_SECRET');

    // smash together into signed token object
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
