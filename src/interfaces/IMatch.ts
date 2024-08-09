import { IBase } from './IBase';

export interface IMatch extends IBase {
  game_id?: string;
  player1_id?: string;
  player2_id?: string;
  winner_id?: string;
  entry_fee: number;
  match_start_time: Date;
  match_end_time: Date;
}
