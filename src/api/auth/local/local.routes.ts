import { Router } from "express";

import { login } from "./local.controller";

const loginRouter = Router();

loginRouter.post("/", login);

export default loginRouter;
