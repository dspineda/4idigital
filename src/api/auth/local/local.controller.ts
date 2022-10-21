import { findUserByEmail } from "../../sign-Up/sign-Up.service";
import { Request, Response, NextFunction } from "express";
import { signToken } from "../auth.service";

async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User or password not registred" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "User or password not registred" });
    }
    const token = await signToken(email);
    return res.json({ token }).status(200);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export { login };
