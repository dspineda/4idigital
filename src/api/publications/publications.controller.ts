import { Request, Response } from "express";

export async function publications (req: Request, res: Response) {
  const getPosts = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const postsJson = await getPosts.json();
  const dataRegister = await {data: postsJson, method: "GET POSTS"};
  await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRegister),
  });
  res.send(postsJson);
}


