import { Document } from 'mongoose';

export interface IBase extends Document {
  _id: string;
}
