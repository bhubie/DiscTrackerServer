import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateDiscDto } from './dto/create-disc.dto';
import { DiscsService } from './discs.service';
import { Disc } from './interfaces/disc.interface';

@Controller('discs')
export class DiscsController {
  constructor(private readonly discsService: DiscsService) {}

  @Post()
  async create(@Body() createDiscDto: CreateDiscDto) {
    this.discsService.create(createDiscDto);
  }

  @Get()
  async findAll(): Promise<Disc[]> {
    return this.discsService.findAll();
  }
}