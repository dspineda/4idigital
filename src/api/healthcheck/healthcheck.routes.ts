import { Router } from "express";
import { healthcheck } from "./healthcheck.controller";

const healthcheckRouter = Router();

/**
 * @openapi
 * /healthcheck:
 *  get:
 *   tags:
 *   - HealthCheck
 *   description: Get a 200 response if the server is up and running
 *   responses:
 *    200:
 *      description: App is up and running
 */
healthcheckRouter.get("/", healthcheck);

export default healthcheckRouter;
