import { Avatar } from "../../models/avatar"
export class AvatarServices {
    protected async createAnAvatar(data: { avatar_url: String }) {
        return (await Avatar.create(data))
    }
    protected async allAvatar(){
        return (await Avatar.find())
    }
    
}