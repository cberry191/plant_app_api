import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPlantDto } from './dto';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}
  // create plant
  async addPlant(dto: AddPlantDto) {
    const plant = await this.prisma.plant.create({
      data: {
        name: dto.name,
        description: dto.description,
        link: dto.link,
      },
    });
    return plant;
  }
  // read plant

  // update plant

  // delete plant
}
