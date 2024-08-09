import { Schema, model } from 'mongoose';
import { IMatch } from '../interfaces/IMatch';
import { BaseSchema } from './base';

const matchSchema = new Schema<IMatch>({
  ...BaseSchema.obj,
  game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
  player1_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  player2_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  winner_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  entry_fee: { type: Number, required: true },
  match_start_time: { type: Date, required: true },
  match_end_time: { type: Date, required: true },
});

export const Match = model<IMatch>('matches', matchSchema);
