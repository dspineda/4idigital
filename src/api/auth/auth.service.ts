import jwt from "jsonwebtoken";
import { findUserByEmail } from "../sign-Up/sign-Up.service";
import { Request, Response, NextFunction } from "express";

const secret = process.env.JWT_SECRET || "secret";

async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
}

async function signToken(email: string) {
  const user = await findUserByEmail(email);
  const token = jwt.sign({ user }, secret, { expiresIn: "1h" });
  return token;
}

async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers?.authorization;

  if (!auth) {
    return res.status(401).json({ error: "No Unauthorized" });
  }

  const [, token] = auth.split(" ");
  const decoded = await verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "No Unauthorized" });
  }

  next();
  return null;
}

export { signToken, isAuthenticated };
