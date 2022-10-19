import { Body, Controller, Post } from '@nestjs/common';
import { PlantDto } from './dto';
import { PlantService } from './plant.service';

@Controller('plant')
export class PlantController {
  constructor(private plantService: PlantService) {}

  @Post()
  addPlant(@Body() dto: PlantDto) {
    return this.plantService.createPlant(dto);
  }
}
