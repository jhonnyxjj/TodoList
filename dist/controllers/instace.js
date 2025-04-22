"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = exports.taskRepository = void 0;
// instance.ts (ou poderia ser main.ts, depende de como vai crescer seu projeto)
const task_repository_1 = require("../repositories/task-repository");
const task_service_1 = require("../service/task-service");
exports.taskRepository = new task_repository_1.TaskRepository();
exports.taskService = new task_service_1.TaskService(exports.taskRepository);
