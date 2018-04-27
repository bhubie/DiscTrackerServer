
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscsController } from './discs.controller';
import { DiscsService } from './discs.service';
import { DiscSchema } from './schemas/disc.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Disc', schema: DiscSchema }])],
  controllers: [DiscsController],
  components: [DiscsService],
})
export class DiscsModule {}