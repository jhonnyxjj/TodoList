"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
class TaskRepository {
    tasks = [];
    currentId = 1;
    async listTasks() {
        return this.tasks;
    }
    async createTasks(task) {
        task.id = this.currentId++;
        this.tasks.push(task);
        return task;
    }
    async updateTaskById(data, id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error("error: Task não encontrada");
        }
        if (data.title !== undefined)
            task.title = data.title;
        if (data.description !== undefined)
            task.description = data.description;
        return task;
    }
    async deleteTasks(id) {
        const taskID = id;
        const index = this.tasks.findIndex(t => t.id === taskID);
        if (index === -1) {
            throw new Error("error: Task não encontrada");
        }
        this.tasks.splice(index, 1);
    }
}
exports.TaskRepository = TaskRepository;
