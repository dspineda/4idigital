import mongoose from "mongoose";
import "dotenv/config";

async function connect() {
  const {MONGODB_URI, MONGODB_URI_TEST, NODE_ENV} = process.env;
  const URI = NODE_ENV === 'test' ? MONGODB_URI_TEST : MONGODB_URI;
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }
}
export default connect;
