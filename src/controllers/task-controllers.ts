import { Request, Response } from "express";
import { taskService } from "../controllers/instace";
import { Task } from "../domain/models/task";



export class TaskController {
    updateTask(task: Task, id: number): Promise<Task> {
        throw new Error("Method not implemented.");
    }


    static async getTasks(req: Request, res: Response): Promise<void> {
        try {

            const tasks = await taskService.listTasks();
            res.status(200).json({ tasks });
        } catch (err: any) {
            {
                res.status(404).send({ error: err.message });
            }
        }
    }


    static async createTask(req: Request, res: Response): Promise<void> {
        try {

            const newTask = await taskService.createTasks(req.body);
            res.status(201).json({ task: newTask });
        } catch (err: any) {
            res.status(500).send({ error: err.message });

        }
    }


    static async updateTaskById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const updateData = req.body;
            const updatedTask = await taskService.updateTaskById(updateData, id);
            res.status(201).json({ task: updatedTask });
        } catch (err: any) {
            res.status(400).send({ error: err.message });
        }
    }

    static async updateTaskStatus(req: Request, res: Response): Promise<void> {

        try {
            const id = Number(req.params.id);
            await taskService.updateTaskStatus(id);
            res.sendStatus(200).send();
        } catch (err: any) {
                res.status(400).json({ error: "Tarefa já concluída" });
            }
        }


    static async deleteTask(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            await taskService.deleteTasks(id);
            res.sendStatus(204);
        } catch (err: any) {
            console.error(err);
            res.status(400).send({ error: err.message });
        }
    }


}