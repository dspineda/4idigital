import { Request, Response } from "express";

const { BASE_URL } = process.env;


export async function users(req: Request, res: Response) {
  const auth = req.headers?.authorization;
  const token = auth?.split(" ")[1];

  const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersJson = await getUsers.json();
  const dataRegister = await { data: usersJson, method: "GET USERS" };
  await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(dataRegister),

  });

  res.send(usersJson);
}

export async function photos(req: Request, res: Response) {
  const auth = req.headers?.authorization;
  const token = auth?.split(" ")[1];
  const id = req.params.id;
  const getPhotos = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`
  );
  const photosJson = await getPhotos.json();
  const dataRegister ={
    data: photosJson,
    method: "GET PHOTOS BY USERS",
  };
  await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataRegister),
  });
  res.send(photosJson);
}
