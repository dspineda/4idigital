import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { SALT_ROUNDS } = process.env;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function save(next) {
  const user = this;

  try {
    if (!user.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(Number(SALT_ROUNDS));
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (e) {
    next();
  }
});

UserSchema.methods.comparePassword = async function comparePassword(
  candidatePassword: string
) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);

    return isMatch;
  } catch (e) {
    return e;
  }
};

export interface IUserSchema extends Document {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export default mongoose.model<IUserSchema>("User", UserSchema);
