import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // validation decorators
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
