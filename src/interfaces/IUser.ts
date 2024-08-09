import { Document, Model } from 'mongoose';
import { IBase } from './IBase';

export interface IUser extends IBase {
  user_email: string;
  user_wallet_address: string;
  wallet_balance: number;
  username: string;
  password: string;
  avatar_id:string|null;
  reset_password_token?: string;
  reset_password_expires?: Date;
  otp_code?: string;
  otp_expires?: Date;
}

export interface IUserDocument extends IUser, Document {
  _id: string;
}
export interface IUsertModel extends Model<IUserDocument> {}
