import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create new server
  const app = await NestFactory.create(AppModule);

  // global validation
  app.useGlobalPipes(
    new ValidationPipe({
      // strip out elements not defined in DTOs
      whitelist: true,
    }),
  );

  // turn on server
  await app.listen(3000);
}
bootstrap();
