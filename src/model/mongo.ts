import mongoose, { Mongoose } from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env");
}


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
};

export default connectDB;