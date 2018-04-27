import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(port);
}
bootstrap();
