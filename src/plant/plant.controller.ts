import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AddPlantDto, EditPlantDto } from './dto';
import { PlantService } from './plant.service';

@UseGuards(JwtGuard)
@Controller('plants')
export class PlantController {
  constructor(private plantService: PlantService) {}

  @Get()
  getPlants() {
    return this.plantService.getPlants();
  }

  @Get(':id')
  getPlantByID(@Param('id', ParseIntPipe) plantId: number) {
    return this.plantService.getPlant(plantId);
  }

  @Post()
  addPlant(@GetUser('id') userId: number, @Body() dto: AddPlantDto) {
    return this.plantService.addPlant(userId, dto);
  }

  @Patch('id')
  editPlant(@Param('id', ParseIntPipe) @Body() dto: EditPlantDto) {}

  @Delete('id')
  deletePlant(@Param('id', ParseIntPipe) plantId: number) {}
}
