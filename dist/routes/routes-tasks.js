"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controllers_1 = require("../controllers/task-controllers");
const router = (0, express_1.Router)();
router.get("/", task_controllers_1.TaskController.getTasks);
router.post("/tasks", task_controllers_1.TaskController.createTask);
router.patch("/tasks/:id", task_controllers_1.TaskController.updateTask);
exports.default = router;
