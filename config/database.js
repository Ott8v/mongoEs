import "dotenv/config";
import mongoose from "mongoose";

const DB = {};
DB.connect = async () =>  await mongoose.connect(process.env.MONGO_URI);
DB.disconnect = async () => await mongoose.disconnect();

export default DB;