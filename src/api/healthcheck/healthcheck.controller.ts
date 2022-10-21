import { Request, Response } from "express";

export const healthcheck = (req: Request, res: Response) => {
  res.json({ message: "App is up and running" });
};
