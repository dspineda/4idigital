"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sign_Up_controller_1 = require("./sign-Up.controller");
const signUpRouter = (0, express_1.Router)();
/**
 * @openapi
 * /signUp:
 *  post:
 *   summary: Create a user
 *   tags: [SignUp]
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
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 *   500:
 *    description: Internal server error
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Error'
 */
signUpRouter.post("/", sign_Up_controller_1.signUp);
exports.default = signUpRouter;
