import { Schema } from 'mongoose';

export const BaseSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

BaseSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});
