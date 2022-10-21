import { Request, Response } from "express";
import { createUser, findUserByEmail } from "./sign-Up.service";

export async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;
  const userFound = await findUserByEmail(email);
  if (userFound) {
    return res.status(400).send({ message: "User already exists" });
  }
  const user = await createUser(req.body);
  return res.status(201).json(user);

}
