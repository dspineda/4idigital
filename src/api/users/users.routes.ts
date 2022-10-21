import { Router } from "express";
import { users, photos } from "./users.controller";


const userRouter = Router();
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
userRouter.get("/", users);

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
userRouter.get("/photos/:id", photos);

export default userRouter;
