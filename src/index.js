import "dotenv/config";
import mongoose from "mongoose";

async function main() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }finally{
        mongoose.disconnect();
        console.log('Disconnected from database');
    }
}

main();