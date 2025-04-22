
import { Router } from "express";
import { TaskController } from "../controllers/task-controllers";

const router = Router();

router.get("/", TaskController.getTasks); 
router.post("/tasks", TaskController.createTask);
router.patch("/tasks/:id", TaskController.updateTask);


export default router;
