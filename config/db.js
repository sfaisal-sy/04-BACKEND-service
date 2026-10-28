import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`03 - DB Connection Established : ${connection.connection.host}`);
    } catch (error) {
        console.error("DB CONNECTION ERROR", error.message);
        process.exit(1);
    };
};

