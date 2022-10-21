import { Router } from "express";
import { signUp } from "./sign-Up.controller";

const signUpRouter = Router();

signUpRouter.post("/", signUp);

export default signUpRouter;
