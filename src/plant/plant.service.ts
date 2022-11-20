import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPlantDto, EditPlantDto } from './dto';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}

  // create plant
  async addPlant(userId: number, dto: AddPlantDto) {
    const plant = await this.prisma.plant.create({
      data: {
        name: dto.name,
        description: dto.description,
        link: dto.link,
        userId: userId,
      },
    });
    return plant;
  }

  // get plants
  async getPlants() {
    const plants = await this.prisma.plant.findMany();

    return plants;
  }

  // get plant by id
  async getPlant(plantId: number) {
    return await this.prisma.plant.findUnique({
      where: {
        id: plantId,
      },
    });
  }

  // update plant
  async editPlant(plantId: number, userId: number, dto: EditPlantDto) {
    return await this.prisma.plant.update({
      where: {
        id: plantId,
      },
      data: {
        ...dto,
      },
    });
  }

  // delete plant
  // set plant.archived = true;
}
