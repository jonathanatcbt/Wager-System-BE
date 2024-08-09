import express, { Router } from "express";
import { ClientAuthController } from "../../controllers/auth/clientAuth";
const router: Router = express.Router();


const clientAuthController = new ClientAuthController()
router.post('/signup', clientAuthController.clientSignUp);
router.post('/login', clientAuthController.clientLogin);
router.post('/request-reset-pass', clientAuthController.requestPasswordReset);
router.post('/reset-pass', clientAuthController.resetPassword);

export default router;