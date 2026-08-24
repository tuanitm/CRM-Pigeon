import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(helmet());
  app.use(compression());
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // API prefix
  app.setGlobalPrefix('v1');

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('PIGEON CRM API')
    .setDescription('CRM Loyalty System for PIGEON Vietnam — Mother & Baby')
    .setVersion('1.0')
    .addBearerAuth()
    .addApiKey({ type: 'apiKey', name: 'X-API-Key', in: 'header' }, 'hmac')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.APP_PORT || 5170;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 PIGEON CRM API running on port ${port} across all IPs (0.0.0.0)`);
  console.log(`📚 API Docs: http://localhost:${port}/api-docs`);
}
bootstrap();
