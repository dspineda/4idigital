import { Router } from "express";
import {
  createRegisterController,
  getRegistersController,
  getRegisterByIdController,
  updateRegisterByIdController,
  deleteRegisterByIdController,
} from "./register.controller";

const registerRouter = Router();

registerRouter.post("/", createRegisterController);
registerRouter.get("/", getRegistersController);
registerRouter.get("/:id", getRegisterByIdController);
registerRouter.put("/:id", updateRegisterByIdController);
registerRouter.delete("/:id", deleteRegisterByIdController);

export default registerRouter;
