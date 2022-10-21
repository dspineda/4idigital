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
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const __1 = __importDefault(require("../.."));
const Register = mongoose_1.default.model("Register");
const User = mongoose_1.default.model("User");
const api = (0, supertest_1.default)(__1.default);
const user = {
    email: "dspi@mail.com",
    password: "123456",
};
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield User.deleteMany({});
    yield Register.deleteMany({});
    const userNew = new User(user);
    yield userNew.save();
}), 10000);
describe("DataBase from API", () => {
    test("Shuould return a list of user from API", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield api
            .post("/login")
            .send(user)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        const response2 = yield api
            .get("/users")
            .set("Authorization", `Bearer ${response.body.token}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(response2.body.length).toBe(10);
    }));
    test("Shuould return a list of posts from API", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield api
            .post("/login")
            .send(user)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        const response2 = yield api
            .get("/posts")
            .set("Authorization", `Bearer ${response.body.token}`)
            .expect(200)
            .expect("Content-Type", /application\/json/);
        expect(response2.body.length).toBe(100);
    }));
});
