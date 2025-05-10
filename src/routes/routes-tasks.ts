
import { Router } from "express";
import { TaskController } from "../controllers/task-controllers";
import { authenticateToken } from "../middleware/authenticate-token";

const router = Router();

router.get("/tasks", TaskController.getTasks);
router.post("/tasks", authenticateToken, TaskController.createTask);
router.patch("/tasks/:id", authenticateToken, TaskController.updateTaskById);
router.patch("/tasks/:id/complete", authenticateToken, TaskController.updateTaskStatus);
router.delete("/tasks/:id", authenticateToken, TaskController.deleteTask);


export default router;
