"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const path_1 = __importDefault(require("path"));
const routesApi = path_1.default.join(__dirname, './api/**/*.routes.ts');
const routesApi2 = path_1.default.join(__dirname, './api/auth/local/local.routes.ts');
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: '4iDigital API',
            version: '1.0.0',
            contact: {
                name: 'David Pineda',
                email: 'dspinedao@gmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080/api-docs',
                escription: 'Local server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [routesApi, routesApi2],
};
