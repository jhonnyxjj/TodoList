
    import { TaskRepository } from "../repositories/task-repository";
    import { TaskService } from "../service/task-service";

    export const taskRepository = new TaskRepository();
    export const taskService = new TaskService(taskRepository);
