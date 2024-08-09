import { Schema, model } from 'mongoose';
import { ILeaderboard } from '../interfaces/ILeaderboard';
import { BaseSchema } from './base';

const leaderboardSchema = new Schema<ILeaderboard>({
  ...BaseSchema.obj,
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rank: { type: Number, required: true },
  total_earnings: { type: Number, required: true, default: 0 },
});

export const Leaderboard = model<ILeaderboard>('leaderboard', leaderboardSchema);
