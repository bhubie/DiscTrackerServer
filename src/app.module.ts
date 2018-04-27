import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscsModule } from './discs/discs.module';
import { dbConfig } from '../config/config';

@Module({
  imports: [DiscsModule, MongooseModule.forRoot(dbConfig.server)],
})
export class ApplicationModule {}
