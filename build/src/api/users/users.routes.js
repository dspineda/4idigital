"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const userRouter = (0, express_1.Router)();
/**
 * @openapi
 *  /users:
 *   get:
 *    summary: Get all users
 *    tags: [Users]
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *       type: array
 *      items:
 *       $ref: '#/components/schemas/User'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Error'
 */
userRouter.get("/", users_controller_1.users);
/**
 * @openapi
 *  /users/photos/{id}:
 *   get:
 *    summary: Get all photos of a user
 *    tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Register'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Error'
 *
 */
userRouter.get("/photos/:id", users_controller_1.photos);
exports.default = userRouter;
