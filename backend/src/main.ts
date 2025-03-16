import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(process.env.PORT ?? 3001);
    console.log(`Server is running on port ${process.env.PORT ?? 3001}`);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
