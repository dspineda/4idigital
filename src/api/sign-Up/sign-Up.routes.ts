import { Router } from "express";
import { signUp } from "./sign-Up.controller";

const signUpRouter = Router();
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
signUpRouter.post("/", signUp);

export default signUpRouter;
