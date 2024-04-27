import mongoose from "mongoose";


export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://zeeshan:19101329@cluster0.qml4y5b.mongodb.net/food-delivery').then(()=>console.log("DB connected="));

}