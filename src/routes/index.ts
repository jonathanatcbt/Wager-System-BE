import express, { Router } from "express";
const router: Router = express.Router();
import clientRouter from './clientAuth';
import clientAPIKeyRouter from './clientApiKey';
import userAuthRouter from './userAuth';
import statusRouter from "./status.routes";
import  AvatarRouter  from "./avatar";

// Use the routers
router.use('/api/client', clientRouter);
router.use('/api/client-key', clientAPIKeyRouter);
router.use('/api/user', userAuthRouter);
router.use("/api/avatar",AvatarRouter)
router.use('/', statusRouter);  // Add the status route to the root path

export default router;
