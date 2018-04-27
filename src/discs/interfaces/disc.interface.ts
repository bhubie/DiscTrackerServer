
import { Document } from 'mongoose';

export interface Disc extends Document {
  readonly name: string;
  readonly  manufacturer: string;
  readonly  type: string;
  readonly distance: number;
  readonly  hst: number;
  readonly  lsf: number;
  readonly net: number;
  readonly dificulty: string;
}