import { Router } from "express";
import { publications } from "./publications.controller";

const router = Router();

router.get("/posts", publications);

export default router;
