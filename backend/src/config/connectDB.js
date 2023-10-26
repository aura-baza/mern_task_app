//config mongoose
import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
//NOTA:connect.connection.host: es para mostrar el host donde nos conectamos a mongoDB.