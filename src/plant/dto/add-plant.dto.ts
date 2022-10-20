import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { isNumber } from 'util';

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
