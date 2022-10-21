import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { AddPlantDto } from './dto';
import { PlantService } from './plant.service';

@Controller('plants')
export class PlantController {
  constructor(private plantService: PlantService) {}

  @Get()
  getPlants() {}

  @Get(':id')
  getPlantByID(@Param('id', ParseIntPipe) plantId: number) {}

  @Post()
  addPlant(@GetUser('id') userId: number, @Body() dto: AddPlantDto) {
    // return this.plantService.addPlant(dto, userId);
  }

  @Patch('id')
  editPlant(@Body() dto: AddPlantDto) {}

  @Delete('id')
  deletePlant(@Param('id', ParseIntPipe) plantId: number) {}
}
