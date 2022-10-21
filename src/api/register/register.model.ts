import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  data: [],

  method: {
    type: String,
  },
});

export default mongoose.model("Register", RegisterSchema);
