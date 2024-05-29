import userService from "../service/user-service";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    const result = await userService.register(req.body);
    res.send(result);
}

export default{register}