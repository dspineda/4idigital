"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publications_controller_1 = require("./publications.controller");
const publicationsRouter = (0, express_1.Router)();
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
publicationsRouter.get("/", publications_controller_1.publications);
exports.default = publicationsRouter;
