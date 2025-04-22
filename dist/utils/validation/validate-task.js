"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaskTitleNotExist = validateTaskTitleNotExist;
async function validateTaskTitleNotExist(taskRepository, title) {
    const existingTask = await taskRepository.findTaskByTitle(title);
    if (existingTask) {
        throw new Error("Já existe uma task com esse nome.");
    }
}
