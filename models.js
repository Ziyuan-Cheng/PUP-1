const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ceshiSchema = new Schema({
    __v: { type: Number, select: false},
    Latitude: { type: Number, required: true},
    Longitude: { type: Number, required: true },
    Engine_Speed: { type: Number, required: true},
    Engine_Temperature: { type: Number, required: true},
    Time : { type: Number, required: true},
}, { timestamps: true });

module.exports = model('Ceshi', ceshiSchema);