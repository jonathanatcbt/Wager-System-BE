import { Avatar } from "../../controllers/avatar";
import { Multer } from "../../middlewares/filehandler/multer";
import { Router } from "express";
let  router:Router=Router()
const uploadAvatar=new Multer().upload()
const avatarController=new Avatar()



router.post("/",uploadAvatar,avatarController.createAvatar)
router.get("/",avatarController.getAllAvatars)
router.get("/test",avatarController.getSingleAvatarById)
router.patch("/:user_id",avatarController.updateAvatar)

export default router;