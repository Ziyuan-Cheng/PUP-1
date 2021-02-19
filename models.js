const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ceshiSchema = new Schema({
    __v: { type: Number, select: false},
    speed: { type: String, required: true},
    temperature: { type: String, required: true },
    humidity: { type: String, required: true},
    
}, { timestamps: true });

module.exports = model('Ceshi', ceshiSchema);