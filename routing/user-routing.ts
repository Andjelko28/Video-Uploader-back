import userController from "../controller/user-controller";
import express from 'express';

const userRouter = express.Router();

userRouter.route('/register').post(userController.register);


export default userRouter;