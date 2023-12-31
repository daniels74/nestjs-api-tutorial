import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Only allow variables listed in auth.dto to be bundled in the request
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
