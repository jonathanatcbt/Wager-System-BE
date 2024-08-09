import { Schema, model } from 'mongoose';
import { IGame } from '../interfaces/IGame';
import { BaseSchema } from './base';

const gameSchema = new Schema<IGame>({
  ...BaseSchema.obj,
  game_name: { type: String, required: true },
  entry_fee: { type: Number, required: true },
});

export const Game = model<IGame>('games', gameSchema);
