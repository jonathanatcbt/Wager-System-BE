import { IBase } from './IBase';

export interface ITransaction extends IBase {
  user_id?: string;
  match_id?: string;
  amount: number;
  transaction_type: 'debit' | 'credit';
  transaction_time: Date;
}
