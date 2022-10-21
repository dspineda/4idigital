import { Router } from "express";
import { users, photos } from "./users.controller";
import { isAuthenticated } from "../auth/auth.service";

const router = Router();

router.get("/users", isAuthenticated, users);
router.get("/users/photos/:id", photos);

export default router;
