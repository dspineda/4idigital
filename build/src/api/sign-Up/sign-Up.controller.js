"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const sign_Up_service_1 = require("./sign-Up.service");
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const userFound = yield (0, sign_Up_service_1.findUserByEmail)(email);
        if (userFound) {
            return res.status(400).send({ message: "User already exists" });
        }
        const user = yield (0, sign_Up_service_1.createUser)(req.body);
        return res.status(201).json(user);
    });
}
exports.signUp = signUp;
