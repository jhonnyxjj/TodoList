"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const instace_1 = require("../controllers/instace");
class TaskController {
    updateTask(task, id) {
        throw new Error("Method not implemented.");
    }
    static async getTasks(req, res) {
        try {
            const tasks = await instace_1.taskService.listTasks();
            res.status(200).json({ tasks });
        }
        catch (err) {
            {
                res.status(404).send({ error: err.message });
            }
        }
    }
    static async createTask(req, res) {
        try {
            const newTask = await instace_1.taskService.createTasks(req.body);
            res.status(201).json({ task: newTask });
        }
        catch (err) {
            {
                res.status(500).send({ error: err.message });
            }
        }
    }
    static async updateTask(req, res) {
        try {
            const id = Number(req.params.id);
            const updateData = req.body;
            const updatedTask = await instace_1.taskService.updateTaskById(updateData, id);
            res.status(201).json({ task: updatedTask });
        }
        catch (err) {
            {
                res.status(500).send({ error: err.message });
            }
        }
    }
}
exports.TaskController = TaskController;
