
// const mongoose = require('mon
// goose');
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const url = process.env.MONGO_URL ;

console.log("MongoDB URL:", url);
const connectDB = async()=>{
    try{

        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
        process.exit(1);    
    }
}
export default connectDB;