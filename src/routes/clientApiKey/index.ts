import express, { Router } from "express";
import { ClientAuthController } from "../../controllers/auth/clientAuth";
import { authMiddleware } from "../../middlewares/auth";
const router: Router = express.Router();


const clientAuthController = new ClientAuthController()
router.post('/request', authMiddleware, clientAuthController.requestNewAPIKey);

export default router;