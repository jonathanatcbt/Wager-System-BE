import { Schema, ObjectId ,model } from 'mongoose';
import { IUserDocument, IUsertModel } from '../interfaces/IUser';
import { BaseSchema } from './base';

const userSchema = new Schema<IUserDocument>({
  ...BaseSchema.obj,
  user_email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  user_wallet_address: { type: String, required: false },
  wallet_balance: { type: Number, false: true, default: 0 },
  reset_password_token: { type: String },
  reset_password_expires: { type: Date },
  otp_code: { type: String, required: false },
  otp_expires: { type: Date },
  avatar_id: {
    type: Schema.Types.ObjectId, // Correctly using Schema.Types.ObjectId here
    default: null,
  }
});

export const User = model<IUserDocument, IUsertModel>('users', userSchema);
