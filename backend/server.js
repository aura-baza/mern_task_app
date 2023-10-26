import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import taskRouter from "./src/routes/taskRouter.js";
import { connectDB } from "./src/config/connectDB.js";
const app = express();

//Middleware: es simplemente una funcion que hace algo especifico. 
//este nos permite enviar al servidor json.
app.use(express.json());
app.use(cors())
//este tener acceso a datos de formularios
app.use(express.urlencoded({extended:false}));
app.use(taskRouter);

//Routes
app.get("/home", (req, res) => {
  res.send("Home page");
});


const PORT = process.env.PORT || 4000;

//NOTA:debemos poner la conexion despues de que el servidor se ejecuta porque al hacer peticiones antes que se ejecute el servidor podría traer problemas.

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
startServer();
