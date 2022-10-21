import { Router } from "express";
import { publications } from "./publications.controller";

const publicationsRouter = Router();

publicationsRouter.get("/", publications);

export default publicationsRouter;
