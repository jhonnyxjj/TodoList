import { Task } from "../domain/models/task";
import { InterfaceRepository } from "../domain/interfaces/interface-repository";
export declare class TaskRepository implements InterfaceRepository {
    private tasks;
    currentId: number;
    listTasks(): Promise<Task[]>;
    createTasks(task: Task): Promise<void>;
    updateTasks(task: Task): Promise<Task>;
    deleteTasks(id: number): Promise<void>;
}
