import mongoose from "mongoose";
import clc from "cli-color";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log(clc.blueBright(`Database connection established`))
  } catch (error) {
    console.error(error)
  }
};

export default connectDB;
