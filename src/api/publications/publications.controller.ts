import { Request, Response } from "express";

export async function publications(req: Request, res: Response) {
  const { BASE_URL } = process.env;
  const getPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsJson = await getPosts.json();
  const dataRegister = { data: postsJson, method: "GET POSTS" };
  await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRegister),
  });
  res.send(postsJson);
}
