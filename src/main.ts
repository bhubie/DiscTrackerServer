import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as cors from 'cors';

const port = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  await app.listen(port);
}
bootstrap();
