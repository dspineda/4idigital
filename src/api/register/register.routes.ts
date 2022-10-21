import { Router } from "express";
import {
  createRegisterController,
  getRegistersController,
  getRegisterByIdController,
  updateRegisterByIdController,
  deleteRegisterByIdController,
} from "./register.controller";

const router = Router();

router.post("/register", createRegisterController);
router.get("/register", getRegistersController);
router.get("/register/:id", getRegisterByIdController);
router.put("/register/:id", updateRegisterByIdController);
router.delete("/register/:id", deleteRegisterByIdController);

export default router;
