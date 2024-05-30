import userController from "../controller/user-controller";
import express from 'express';

const userRouter = express.Router();

userRouter.route('/register').post(userController.register);
userRouter.route('/login').post(userController.login);

export default userRouter;