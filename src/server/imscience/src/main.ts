import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '@config/env';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  const PORT = env.PORT || 3000;

  await app.listen(PORT);
  Logger.log(`🚀 Server running at: http://localhost:${PORT}/api`);
  
}
bootstrap();
