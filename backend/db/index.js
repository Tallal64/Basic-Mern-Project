import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(connnectionInstance.connection.host);
    console.log("successfully connected to database");
  } catch (error) {
    console.error("Error when connecting to the database", error);
    process.exit(1);
  }
};
