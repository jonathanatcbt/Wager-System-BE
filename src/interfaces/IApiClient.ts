import { Document, Model } from 'mongoose';

export interface IApiClient {
  _id?: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  password: string;
  is_email_confirmed: boolean;
  is_phone_confirmed?: boolean;
  api_key?: string;
  api_key_created_at?: Date;
  reset_password_token?: string;
  reset_password_expires?: Date;
}

export interface IApiClientDocument extends IApiClient, Document {
  _id: string;
}
export interface IApiClientModel extends Model<IApiClientDocument> {}
