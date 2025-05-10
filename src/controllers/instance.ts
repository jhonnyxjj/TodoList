
    import { AuthenticationService } from "../service/authentication-service";
import { TaskRepository } from "../repositories/task-repository";
    import { TaskService } from "../service/task-service";

    export const taskRepository = new TaskRepository();
    export const taskService = new TaskService(taskRepository);
    export const authenticationService = new AuthenticationService();
    
