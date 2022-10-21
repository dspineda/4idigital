import { Router } from "express";
import { healthcheck } from "./healthcheck.controller";

const healthcheckRouter = Router();

healthcheckRouter.get("/", healthcheck);

export default healthcheckRouter;
