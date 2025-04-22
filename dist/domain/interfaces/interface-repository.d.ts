import { Task } from "../models/task.js";
export interface InterfaceRepository {
    listTasks(): Promise<Task[]>;
    createTasks(task: Task): Promise<void>;
    updateTasks(task: Task): Promise<Task>;
    deleteTasks(id: number): Promise<void>;
}
