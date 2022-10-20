import { Request, Response } from "express";
import { createUser } from "./sign-Up-In.controller.service";

export async function signUp (req: Request, res: Response) {
  const user = await createUser( req.body );
  res.status(201).send(user);
}

