import { Schema, model } from 'mongoose';
import { IApiClientDocument, IApiClientModel } from '../interfaces/IApiClient';
import { BaseSchema } from './base';
import crypto from 'crypto';

const apiClientSchema = new Schema<IApiClientDocument>({
  ...BaseSchema.obj,
  client_name: { type: String, required: true },
  client_email: { type: String, required: true, unique: true },
  client_phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  is_email_confirmed: { type: Boolean, default: false },
  is_phone_confirmed: { type: Boolean, default: false },
  api_key: { type: String, default: () => crypto.randomBytes(32).toString('hex') },
  api_key_created_at: { type: Date, default: Date.now },
  reset_password_token: { type: String },
  reset_password_expires: { type: Date }
});

export const ApiClient = model<IApiClientDocument, IApiClientModel>('client', apiClientSchema);
