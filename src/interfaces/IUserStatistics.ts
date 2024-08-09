import { IBase } from './IBase';

export interface IUserStatistics extends IBase {
  user_id?: string;
  wins: number;
  losses: number;
  games_played: number;
  total_balance_added: number;
  total_balance_withdrawn: number;
}
