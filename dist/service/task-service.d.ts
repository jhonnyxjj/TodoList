import { InterfaceRepository } from "../domain/interfaces/interface-repository.js";
import { Task } from "../domain/models/task.js";
export declare class TaskService implements InterfaceRepository {
    private taskRepository;
    constructor();
    listTasks(): Promise<Task[]>;
    createTasks(task: Task): Promise<void>;
    updateTasks(task: Task): Promise<Task>;
    deleteTasks(id: number): Promise<void>;
}
