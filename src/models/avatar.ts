import { Schema, model } from 'mongoose';
import { IAvatarDocument, IAvatarModel } from '../interfaces/IAvatar';
import { BaseSchema } from './base';

const avatarSchema = new Schema<IAvatarDocument>({
  ...BaseSchema.obj,
 avatar_url:{
    type:String,
    required:true
 }
});

export const Avatar = model<IAvatarDocument, IAvatarModel>('avatars', avatarSchema);
