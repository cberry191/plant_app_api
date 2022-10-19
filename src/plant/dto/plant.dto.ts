import { IsString } from 'class-validator';
import { isNumber } from 'util';

export class PlantDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  link: string;
  userId: number;
}
