
import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Disc } from './interfaces/disc.interface';
import { CreateDiscDto } from './dto/create-disc.dto';
import { DiscSchema } from './schemas/disc.schema';

@Component()
export class DiscsService {
  constructor(@InjectModel(DiscSchema) private readonly discModel: Model<Disc>) {}

  async findAll(): Promise<Disc[]> {
    return await this.discModel.find().exec();
  }
}