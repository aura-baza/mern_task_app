import { Router } from "express";
import { addTask, deleteOneTask, readOneTask, readTasks, upDateTask } from "../controller/taskController.js";


const taskRouter=Router();

taskRouter.post('/addTask',addTask);
taskRouter.get('/getAllTasks',readTasks);
taskRouter.get('/getOneTask/:id',readOneTask);
taskRouter.delete('/deleteOneTask/:id',deleteOneTask);
taskRouter.put('/upDateTask/:id',upDateTask);

export default taskRouter;