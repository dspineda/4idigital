import { Request, Response } from "express";

export async function publications (req: Request, res: Response) {
  const getUsers = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const usersJson = await getUsers.json();
  res.send(usersJson);
}


