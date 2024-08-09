import { Request, Response } from "express"
import { AvatarServices } from "./avatar.service"
import { BASEURL } from "../../config/config"
import { User } from "../../models/user"
import { userService } from "../users/user.service"
// import { ObjectId,Mongoose } from 'mongoose';
import mongoose from "mongoose"
export class Avatar extends AvatarServices {

    public userServices = new userService()
    public createAvatar = async (req: Request, res: Response) => {
        try {
            const { imageLink } = req.body
            if (!req.file && !imageLink) {
                return res.status(400).json({ status: false, message: 'avatar data is missing' })
            }
            if (req.file){
                let imagePath=`${BASEURL}/${encodeURI(req.file.path.replace(/\\/g, '/'))}`
                console.log("i am not working here ",imagePath)
                const avatarWithFile = await this.createAnAvatar({ avatar_url: `${imagePath}` })
                return res.status(201).json({ status: true, message: 'avatar created successfully', data: avatarWithFile })
            }
            const avatarWithOutFile = await this.createAnAvatar({ avatar_url: `${imageLink}` })
            return res.status(201).json({ status: true, message: 'avatar created successfully', data: avatarWithOutFile })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ status: false, message: 'Internel Server Error' })
        }
    }
    public getAllAvatars = async (req: Request, res: Response) => {
        try {
            const allAvatars = await this.allAvatar()
            return res.status(200).json({ status: true, message: 'All avatars are fetched', data: allAvatars })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ status: false, message: 'Internel Server Error' })
        }
    }
    public getSingleAvatarById = async (req: Request, res: Response) => {
        try {
            const users = await User.aggregate([
                {
                    $match: {
                        username: "Muhammad Umar mayo"
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
            ]);

            return res.status(200).json({ status: true, message: 'All avatars are fetched', data: users })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ status: false, message: 'Internel Server Error' })
        }
    }
    public updateAvatar = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params
            if (!user_id) {
                return res.status(400).json({ status: false, message: 'User id not found ' })
            }
            const { avatar_id } = req.body
            if (!avatar_id) {
                return res.status(400).json({ status: false, message: 'User id not found ' })
            }
            console.log(new mongoose.Types.ObjectId(avatar_id) as unknown as mongoose.Schema.Types.ObjectId)
            await this.userServices.updateUserData(new mongoose.Types.ObjectId(user_id) as unknown as mongoose.Schema.Types.ObjectId,new mongoose.Types.ObjectId(avatar_id) as unknown as mongoose.Schema.Types.ObjectId)
            return res.status(201).json({ status: true, message: 'avatar updated successfully' })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ status: false, message: 'Internel Server Error' })
        }
    }
}