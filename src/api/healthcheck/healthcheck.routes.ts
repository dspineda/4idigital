import { Router } from "express";
import { healthcheck } from "./healthcheck.controller";

const router = Router();

router.get("/healthcheck", healthcheck);

export default router;
