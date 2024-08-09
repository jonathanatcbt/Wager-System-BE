import { IBase } from './IBase';

export interface ILeaderboard extends IBase {
  user_id?: string;
  rank: number;
  total_earnings: number;
}
