import mongoose from "mongoose";
import "dotenv/config"

/*mongoose.connect(`${process.env.MONGO_URI}`)
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.log(err));*/

 async function connect() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log('Connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB')
    process.exit(1)
  }
 }
 export default connect







  
