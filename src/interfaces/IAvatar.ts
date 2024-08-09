import { Document, Model } from 'mongoose';
import { IBase } from './IBase';

export interface IAvatar extends IBase {
  avatar_url:string
}

export interface IAvatarDocument extends IAvatar, Document {
  _id: string;
}
export interface IAvatarModel extends Model<IAvatarDocument> {}
