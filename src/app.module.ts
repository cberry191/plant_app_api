import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { PlantModule } from './plant/plant.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductsModule, AuthModule, UserModule, PlantModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
