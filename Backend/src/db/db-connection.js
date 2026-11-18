import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../src/.env",
});

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDb Connection is Succesfull");
  } catch (error) {
    console.log("Error in connecting to the Database ", error);
    process.exit(1);
  }
};

export default dbConnection;
