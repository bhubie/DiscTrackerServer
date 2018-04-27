import { Connection } from 'mongoose';
import { DiscSchema } from './schemas/disc.schema';

export const discsProviders = [
  {
    provide: 'DiscModelToken',
    useFactory: (connection: Connection) => connection.model('Disc', DiscSchema),
    inject: ['DbConnectionToken'],
  },
];