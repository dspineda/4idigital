"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RegisterSchema = new mongoose_1.default.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    data: [],
    method: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("Register", RegisterSchema);
