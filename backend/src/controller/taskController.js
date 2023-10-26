import { json } from "express";
import taskModel from "../models/taskModel.js";

//Create a task
export const addTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

//Read all task in DB
export const readTasks = async (req, res) => {
  try {
    //find devuelve toda las tareas, aunque podemos desectructurar y traer la que queramos
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
    //    console.log(tasks);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

//Read a task
export const readOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findById(id);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json(task);
    console.log(task);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

//Delete a task
export const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

//Update a task
export const upDateTask = async (req, res) => {
  try {
    //NOTA:findByIdAndUpdate este recibe 3 parametros; primero: el id que se encontró, segundo: el cuerpo que será enviado y tercero:la nueva entrada a la DB. 
    const { id } = req.params;
    let task = await taskModel.findByIdAndUpdate(
      {_id:id}, req.body, { new :true , runValidators:true}
    )
    //runValidators: ejecutar los campos requeridos en el modelo.
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg: error.message}); 
  }
};

