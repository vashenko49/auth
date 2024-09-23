import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import { AppModule } from './core/app/app.module';

const setupCors = (app: INestApplication) => {
  const origin = process.env.CORS_URLS ? process.env.CORS_URLS.split(',') : [];

  app.enableCors({
    origin,
    credentials: true,
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupCors(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use(morgan('tiny'));
  app.use(cookieParser());

  app.use(json({ limit: '5mb' }));

  const config = new DocumentBuilder()
    .setTitle('Auth ')
    .setDescription('Oauth API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.startAllMicroservices();

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
