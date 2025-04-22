"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const validate_task_1 = require("../utils/validation/validate-task");
class TaskService {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async listTasks() {
        return this.taskRepository.listTasks();
    }
    async createTasks(task) {
        if (!task.title || task.title.trim().length < 3) {
            throw new Error("O título da tarefa deve ter pelo menos 3 caracteres.");
        }
        await (0, validate_task_1.validateTaskTitleNotExist)(this.taskRepository, task.title);
        const newTask = await this.taskRepository.createTasks(task);
        return newTask;
    }
    async updateTaskById(data, id) {
        if (!data.title) {
            throw new Error("O titulo da task é obrigatorio");
        }
        if (isNaN(id)) {
            throw new Error("O ID da task é inválido, ou não existe.");
        }
        await (0, validate_task_1.validateTaskTitleNotExist)(this.taskRepository, data.title);
        const updatedTask = await this.taskRepository.updateTaskById(data, id);
        return updatedTask;
    }
    async deleteTasks(id) {
        throw new Error("Method not implemented.");
    }
}
exports.TaskService = TaskService;
