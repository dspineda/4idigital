"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = exports.createUser = void 0;
const sign_Up_model_1 = __importDefault(require("./sign-Up.model"));
function createUser(user) {
    return sign_Up_model_1.default.create(user);
}
exports.createUser = createUser;
function findUserByEmail(email) {
    return sign_Up_model_1.default.findOne({ email });
}
exports.findUserByEmail = findUserByEmail;
