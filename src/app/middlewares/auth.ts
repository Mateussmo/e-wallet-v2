import jwt from "jsonwebtoken";
import { promisify } from "util";
import { Request, Response, NextFunction } from "express";

interface Decoded {
  id: string;
}

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token não informado!" });
  }
  const [, token] = authHeader.split(" ");
  try {
    const decoded: Decoded = (await promisify(jwt.verify)(
      token,
      process.env.APP_SECRET as string
    )) as Decoded;

    req.userId = decoded.id;

    return next();
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ message: "Internal Server Error on Authentication" });
  }
};
