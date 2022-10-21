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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sign_Up_service_1 = require("../sign-Up/sign-Up.service");
const secret = process.env.JWT_SECRET || "secret";
function verifyToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, secret);
            return decoded;
        }
        catch (err) {
            return null;
        }
    });
}
function signToken(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, sign_Up_service_1.findUserByEmail)(email);
        const token = jsonwebtoken_1.default.sign({ user }, secret, { expiresIn: "1h" });
        return token;
    });
}
exports.signToken = signToken;
function isAuthenticated(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const auth = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (!auth) {
            return res.status(401).json({ error: "No Unauthorized" });
        }
        const [, token] = auth.split(" ");
        const decoded = yield verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ error: "No Unauthorized" });
        }
        next();
        return null;
    });
}
exports.isAuthenticated = isAuthenticated;
