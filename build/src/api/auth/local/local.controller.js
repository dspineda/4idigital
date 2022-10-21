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
exports.login = void 0;
const sign_Up_service_1 = require("../../sign-Up/sign-Up.service");
const auth_service_1 = require("../auth.service");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield (0, sign_Up_service_1.findUserByEmail)(email);
            if (!user) {
                return res
                    .status(404)
                    .json({ message: "User or password not registred" });
            }
            const isMatch = yield user.comparePassword(password);
            if (!isMatch) {
                return res
                    .status(404)
                    .json({ message: "User or password not registred" });
            }
            const token = yield (0, auth_service_1.signToken)(email);
            return res.json({ token }).status(200);
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    });
}
exports.login = login;
