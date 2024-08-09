import { Schema, model } from 'mongoose';
import { IUserStatistics } from '../interfaces/IUserStatistics';
import { BaseSchema } from './base';

const userStatisticsSchema = new Schema<IUserStatistics>({
  ...BaseSchema.obj,
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  wins: { type: Number, required: true, default: 0 },
  losses: { type: Number, required: true, default: 0 },
  games_played: { type: Number, required: true, default: 0 },
  total_balance_added: { type: Number, required: true, default: 0 },
  total_balance_withdrawn: { type: Number, required: true, default: 0 },
});

export const UserStatistics = model<IUserStatistics>('user_statistics', userStatisticsSchema);
