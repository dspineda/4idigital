"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("./register.controller");
const registerRouter = (0, express_1.Router)();
/**
 * @openapi
 * /register:
 *  post:
 *   summary: Create a register
 *   tags: [Register]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Register'
 *   responses:
 *    201:
 *     description: Created
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
 */
registerRouter.post("/", register_controller_1.createRegisterController);
/**
 * @openapi
 * /register:
 *  get:
 *   summary: Get all registers
 *   tags: [Register]
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *        $ref: '#/components/schemas/Register'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Error'
 *
 */
registerRouter.get("/", register_controller_1.getRegistersController);
/**
 * @openapi
 * /register/{id}:
 *  get:
 *   summary: Get a register by id
 *   tags: [Register]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The register id
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
registerRouter.get("/:id", register_controller_1.getRegisterByIdController);
/**
 * @openapi
 * /register/{id}:
 *  put:
 *   summary: update a register by id
 *   tags: [Register]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The register id
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
registerRouter.put("/:id", register_controller_1.updateRegisterByIdController);
/**
 * @openapi
 * /register/{id}:
 *  delete:
 *   summary: delete a register by id
 *   tags: [Register]
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: The register id
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
registerRouter.delete("/:id", register_controller_1.deleteRegisterByIdController);
exports.default = registerRouter;
