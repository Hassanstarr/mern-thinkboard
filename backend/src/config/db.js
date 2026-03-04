import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL
            // "mongodb+srv://<user name>:< password >@cluster0.gqwlmim.mongodb.net/<have to add name of DB>?appName=Cluster0"
        );
        console.log("MongoDB connected successfully!");
        
    } catch (error) {
        console.log("Error connecting to MONGODB",error);
        process.exit(1) //exist with failure
    }
    
}