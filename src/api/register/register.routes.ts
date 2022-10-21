import { Router } from "express";
import {
  createRegisterController,
  getRegistersController,
  getRegisterByIdController,
  updateRegisterByIdController,
  deleteRegisterByIdController,
} from "./register.controller";

const registerRouter = Router();

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
registerRouter.post("/", createRegisterController);

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
registerRouter.get("/", getRegistersController);

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
registerRouter.get("/:id", getRegisterByIdController);

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
registerRouter.put("/:id", updateRegisterByIdController);

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
registerRouter.delete("/:id", deleteRegisterByIdController);

export default registerRouter;
