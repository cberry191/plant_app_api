import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddPlantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  link: string;
}
