"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
(0, database_1.default)();
app.set("port", process.env.PORT || 8080);
const spec = (0, swagger_jsdoc_1.default)(swagger_1.options);
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
    console.log(`Swagger docs running on http://localhost:${app.get("port")}/api-docs`);
});
exports.default = app;
