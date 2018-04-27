
import * as mongoose from 'mongoose';

export const DiscSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    type: String,
    distance: Number,
    hst: Number,
    lsf: Number,
    net: Number,
    dificulty: String,
});