import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import * as redis from 'redis';
import { AppModule } from './app.module';

let RedisStore = connectRedis(session);

async function bootstrap() {
  // create new server
  const app = await NestFactory.create(AppModule);

  // middleware

  // initialise sessions with redis

  app.use(
    session({
      store: new RedisStore({ client: redis.createClient() }),
      saveUninitialized: false,
      secret: 'keyboard cat',
      resave: false,
    }),
  );

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
