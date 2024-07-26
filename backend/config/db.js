//connect with DB
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:1234567greatstack@cluster0.0oahry3.mongodb.net/food-del').then(() => console.log("DB Connected"));
}
