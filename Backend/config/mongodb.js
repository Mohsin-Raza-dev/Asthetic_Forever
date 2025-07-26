import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected");
    })

    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;