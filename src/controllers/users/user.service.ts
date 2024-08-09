import { ObjectId } from 'mongoose';
import { IUserDocument } from '../../interfaces/IUser';
import { User } from '../../models/user';

export class userService {
  public async saveNewUserWallet(apiClientPayload: Partial<IUserDocument>): Promise<void> {
    const user = new User(apiClientPayload);
    await user.save();
  }
  public async findUserByWalletAddress(user_wallet_address: string): Promise<IUserDocument | null> {
    return User.findOne({ user_wallet_address });
  }
  public async findUserByUsername(username: string): Promise<IUserDocument | null> {
    return User.findOne({ username });
  }
  public async findUserByEmail(user_email: string): Promise<IUserDocument | null> {
    return User.findOne({ user_email });
  }
  public async dynamicUserSearch(property_name: string, value: string): Promise<IUserDocument | null> {
    return User.findOne({ [property_name]: value });
  }
  public async dynamicUserSearchWithAvatar(property_name:string,value:string){
    return ( await User.aggregate([
      {   
          $match: {
              [property_name]:value
          }
      },
      {   
          $lookup: {
              from: 'avatars',  // The name of the collection you are joining
              localField: 'avatar_id',  // The field from the users collection
              foreignField: '_id',  // The field from the avatars collection
              as: 'avatarData'  // The field name to include the joined documents
          }
      },
      {
          $unwind: {
              path: '$avatarData',
              preserveNullAndEmptyArrays: true  // Include users even if they don't have an avatar
          }
      },
      {
          $project: {
              _id: 1,
              user_email: 1,
              username: 1,
              wallet_balance: 1,
              avatar_id: 1,
              'avatarData.avatar_url': 1,  // Ensure to project nested avatar_url correctly
              createdAt: 1,
              updatedAt: 1
          }
      }
  ]));
  }
  public async saveOTP(user_id: ObjectId, otp_code: string): Promise<IUserDocument | null> {
    const now = new Date();
    return User.findByIdAndUpdate(user_id, {
      otp_code: otp_code, otp_expires: now.setMinutes(now.getMinutes() + 2)
    });
  }
  public async verifyOTP(user_id: ObjectId, otp_code: string): Promise<IUserDocument | null> {
    return User.findOneAndUpdate(
      { _id: user_id, otp_code, otp_expires: { $gt: new Date() } },
      { otp_code: undefined, otp_expires: undefined }
    );
  }
  public async saveUserPassword(user_id: ObjectId, password: string): Promise<IUserDocument | null> {
    return User.findByIdAndUpdate(
      { _id: user_id },
      { password }
    );
  }
  public async updateUserData(user_id: ObjectId, avatar_id: ObjectId): Promise<IUserDocument | null> {
    return User.findByIdAndUpdate(
      { _id: user_id },
      { avatar_id }
    );
  }
  public async saveUserRecord(userRecord: Partial<IUserDocument>): Promise<IUserDocument | null> {
    return User.create(userRecord);
  }
}
