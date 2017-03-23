import mongoose from 'mongoose';

let ThingSchema  = new mongoose.Schema({
  name: String,
  weight: Number
});

export default mongoose.model('Thing', ThingSchema);
