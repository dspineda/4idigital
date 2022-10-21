"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_model_1 = __importDefault(require("./register.model"));
function createRegister(register) {
    return register_model_1.default.create(register);
}
function getRegisters() {
    return register_model_1.default.find();
}
function getRegisterById(id) {
    return register_model_1.default.findById(id);
}
function updateRegisterById(id, register) {
    return register_model_1.default.findByIdAndUpdate(id, register);
}
function deleteRegisterById(id) {
    return register_model_1.default.findByIdAndDelete(id);
}
exports.default = {
    createRegister,
    getRegisters,
    getRegisterById,
    updateRegisterById,
    deleteRegisterById,
};
