var mongoose = require('mongoose');

var discSchema = new mongoose.Schema({
    name: String,
    manufacturer: String,
    type: String,
    distance: Number,
    hst: Number,
    lsf: Number,
    net: Number,
    dificulty: String,
});

module.exports = discSchema;