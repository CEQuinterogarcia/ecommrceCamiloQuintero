import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Habilitar CORS
   app.enableCors({
    origin: 'http://localhost:4200', // Aquí especificas tu origen frontend
    credentials: true, // Si necesitas enviar cookies u otras credenciales
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
