import { Request, Response } from "express";
import User from "../models/UserModel";

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create({
        email: req.body.email,
        password_hashed: req.body.password,
      });

      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(501).json(error);
    }
  }
}

export default new UserController();
