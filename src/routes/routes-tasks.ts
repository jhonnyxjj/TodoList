
import { Router } from "express";
import { TaskController } from "../controllers/task-controllers";

const router = Router();

router.get("/", TaskController.getTasks); 
router.post("/tasks", TaskController.createTask);
router.patch("/tasks/:id", TaskController.updateTaskById);
router.patch("/tasks/:id/complete", TaskController.updateTaskStatus);
router.delete("/tasks/:id", TaskController.deleteTask);


export default router;
