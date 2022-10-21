"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const loginRouter = (0, express_1.Router)();
/**
 * @openapi
 * /login:
 *  post:
 *   summary: Login a user
 *   tags: [Login]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         description: The email of the user
 *         example:
 *         email: "dspi@mail.com"
 *        password:
 *         type: string
 *         description: The password of the user
 *         example:
 *         password: "123456"
 *   responses:
 *    200:
 *     description: Login a user and return token
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         token:
 *          type: string
 *          description: The token of the user
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Error'
 */
loginRouter.post("/", local_controller_1.login);
exports.default = loginRouter;
