// otra manera de integrar la conexion a la base de datos  es creando un modelo

import mongoose from "mongoose";

//creamos un Schema
 const taskSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require:[true, "Please add a Task"]
        },
        completed:{
            type:Boolean,
            require:true,
            default: false
        }

    },
    {
        timestamps:true
    }
)
let Task="";
export default  Task=mongoose.model("Task", taskSchema);

//timestamps contendrá 2 propiedades: la hora en que se creó la base de datos o la hora en que se actualizó esta. 