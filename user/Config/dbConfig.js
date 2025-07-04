import mongoose from "mongoose";
import { MongoDB_Url } from "./serverConfig.js";

export default async function connectDB(){
    try {
        
        await mongoose.connect(MongoDB_Url);
        console.log('connection established to Mongo DB')
    } catch (error) {
        console.log('connection failed to MOngoDB')
       console.log(error)
    }
}