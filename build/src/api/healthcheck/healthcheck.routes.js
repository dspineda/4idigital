"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthcheck_controller_1 = require("./healthcheck.controller");
const healthcheckRouter = (0, express_1.Router)();
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
healthcheckRouter.get("/", healthcheck_controller_1.healthcheck);
exports.default = healthcheckRouter;
