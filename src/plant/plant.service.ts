import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPlantDto } from './dto';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}
  // create plant
  async addPlant(userId: number, dto: AddPlantDto) {
    const plant = await this.prisma.plant.create({
      data: {
        userId,
        ...dto,
      },
    });
    return plant;
  }
  // read plant

  // update plant

  // delete plant
}
