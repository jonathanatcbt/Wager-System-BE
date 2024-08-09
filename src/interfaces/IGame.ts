import { IBase } from './IBase';

export interface IGame extends IBase {
  game_name: string;
  entry_fee: number;
}
