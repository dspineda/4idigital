import User from "./sign-Up.model";

export function createUser(user: string) {
  return User.create(user);
}

export function findUserByEmail(email: string) {
  return User.findOne({ email });
}
