import { Router } from "express";
import { signUp } from "./sign-Up.controller";

const router = Router();

router.post("/sign-up", signUp);

export default router;
