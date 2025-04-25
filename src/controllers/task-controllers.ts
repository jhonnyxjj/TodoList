import e, { Request, Response } from "express";
import { taskService } from "../controllers/instace";
import { Task } from "../domain/models/task";



export class TaskController {

    static async getTasks(req: Request, res: Response): Promise<void> {
        try {
            const tasks = await taskService.listTasks();
            res.status(200).json({ tasks });
        } catch (err: any) {
            res.status(400).send({ error: err.message });
        }


    }


    static async createTask(req: Request, res: Response): Promise<void> {
        try {
            if (!req.body.title) {
                res.status(400).json({ error: "O campo 'title' é obrigatório." });
                return;
            }

            await taskService.createTask(req.body);
            res.status(201).send()
        } catch (err: any) {
            res.status(400).send({ error: err.message });

        }
    }


    static async updateTaskById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);

            // Validação básica do ID (HTTP-related)
            if (isNaN(id) || id <= 0) { res.status(400).json({ error: "ID inválido" }); return }

            const updateData = req.body;

            const updatedTask = await taskService.updateTaskById(updateData, id);
            res.status(200).json({ task: updatedTask });

        } catch (err: any) {
            res.status(404).json({ error: err.message });

        }

    }


    static async updateTaskStatus(req: Request, res: Response): Promise<void> {

        try {
            const id = Number(req.params.id);

            if (isNaN(id) || id <= 0) {res.status(400).json({ error: "ID inválido" }); return; }

            await taskService.updateTaskStatus(id);
            res.sendStatus(200);

        } catch (err: any) {
            res.status(404).send({ error: err.message });
        }
    }


    static async deleteTask(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            await taskService.deleteTask(id);
            res.status(204).send();
        } catch (err: any) {
            res.status(404).json({ error: "Tarefa não encontrada" });
        }
    }
}