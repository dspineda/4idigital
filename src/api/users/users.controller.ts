import { Request, Response } from "express";


export async function users (req: Request, res: Response) {
  const getUsers = await fetch ("https://jsonplaceholder.typicode.com/users");
  const usersJson = await getUsers.json();
  const dataRegister = await {data: usersJson, method: "GET USERS"};
  await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRegister),
  });
 
  res.send(usersJson);
}

export async function photos (req: Request, res: Response) {
  const id = req.params.id;
  const getPhotos = await fetch (`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  const photosJson = await getPhotos.json();
  const dataRegister = await {data: photosJson, method: "GET PHOTOS BY USERS"};
  await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRegister),
  });
  res.send(photosJson);
}


