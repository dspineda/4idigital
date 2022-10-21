import { Router } from "express";

import { login } from "./local.controller";

const router = Router();

router.post("/login", login);

export default router;