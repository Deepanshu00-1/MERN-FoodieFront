import mongoose from "mongoose";

// RTIUGCijlaZ2nqqt

const connectDB = async()=>{
    const conn = await mongoose.connect("mongodb+srv://krrohan129:RTIUGCijlaZ2nqqt@cluster0.3hi69.mongodb.net/Foodiefront-Auth?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected", conn.connection.host);
}

export default connectDB;