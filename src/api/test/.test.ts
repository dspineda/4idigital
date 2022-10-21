import supertest from "supertest";
import mongoose from "mongoose";
import app from "../..";




const Register = mongoose.model("Register");
const User = mongoose.model("User");
const api = supertest(app);

const user = {
  email: "dspi@mail.com",
  password: "123456",
};
 
beforeEach(async () => {
  await User.deleteMany({});
  await Register.deleteMany({});

  const userNew = new User(user)
  await userNew.save()


}, 10000);

describe("DataBase from API", () => {

  test("Shuould return a list of user from API", async () => {
    const response =  await api
      .post("/login")
      .send(user)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    

      const response2 = await api
      .get("/users")
      .set("Authorization", `Bearer ${response.body.token}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response2.body.length).toBe(10);
  })

  test("Shuould return a list of posts from API", async () => {
    const response =  await api
    .post("/login")
    .send(user)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  

    const response2 = await api
    .get("/posts")
    .set("Authorization", `Bearer ${response.body.token}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  expect(response2.body.length).toBe(100);
  })

});













