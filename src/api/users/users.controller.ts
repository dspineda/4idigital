import { Request, Response } from "express";

export async function users (req: Request, res: Response) {
  const getUsers = await fetch ("https://jsonplaceholder.typicode.com/users");
  const usersJson = await getUsers.json();
  res.send(usersJson);
}

export async function photos (req: Request, res: Response) {
  const id = req.params.id;
  const getPhotos = await fetch (`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  const photosJson = await getPhotos.json();
  res.send(photosJson);
}


