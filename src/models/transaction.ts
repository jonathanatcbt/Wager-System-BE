import { Schema, model } from 'mongoose';
import { ITransaction } from '../interfaces/ITransaction';
import { BaseSchema } from './base';

const transactionSchema = new Schema<ITransaction>({
  ...BaseSchema.obj,
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  match_id: { type: Schema.Types.ObjectId, ref: 'Match', required: false },
  amount: { type: Number, required: true },
  transaction_type: { type: String, enum: ['debit', 'credit'], required: true },
  transaction_time: { type: Date, required: true, default: Date.now },
});

export const Transaction = model<ITransaction>('transactions', transactionSchema);
