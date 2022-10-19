import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlantDto } from './dto';

@Injectable()
export class PlantService {
  constructor(private prisma: PrismaService) {}
  // create plant
  async createPlant(dto: PlantDto) {
    const plant = await this.prisma.plant.create({
      data: {
        name: dto.name,
        description: dto.description,
        link: dto.link,
        userId: dto.userId,
      },
    });
    return plant;
  }
  // read plant

  // update plant

  // delete plant
}
