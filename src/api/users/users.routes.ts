import { Router } from "express";
import { users, photos } from "./users.controller";


const userRouter = Router();

userRouter.get("/", users);
userRouter.get("/photos/:id", photos);

export default userRouter;
