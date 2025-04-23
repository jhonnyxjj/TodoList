    // instance.ts (ou poderia ser main.ts, depende de como vai crescer seu projeto)
    import { TaskRepository } from "../repositories/task-repository";
    import { TaskService } from "../service/task-service";

    export const taskRepository = new TaskRepository();
    export const taskService = new TaskService(taskRepository);
