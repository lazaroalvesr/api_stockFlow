import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    allowedHeaders: 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS',
    origin: "http://localhost:3000/"
  });

  await app.listen(3001);
}
bootstrap();
