import { Router } from "express";
import { publications } from "./publications.controller";

const publicationsRouter = Router();

/**
 * @openapi
 * /posts:
 *  get:
 *   summary: Get all posts
 *   tags: [Publications]
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Post'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Error'
 *
 *
 */
publicationsRouter.get("/", publications);

export default publicationsRouter;
