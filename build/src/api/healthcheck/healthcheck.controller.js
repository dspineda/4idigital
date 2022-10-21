"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheck = void 0;
const healthcheck = (req, res) => {
    res.json({ message: "App is up and running" });
};
exports.healthcheck = healthcheck;
