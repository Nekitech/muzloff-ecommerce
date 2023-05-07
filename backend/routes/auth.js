import {Router} from "express";
import {PersonController} from "../controller/User.model.js";


const authRouter = new Router();


authRouter.post('/reg', PersonController.registration)
authRouter.post('/auth', PersonController.auth)

export default authRouter;