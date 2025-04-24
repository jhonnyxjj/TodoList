import { Task } from "../models/task";


export interface IService {
    listTasks(): Promise<Task[]>;
    createTask(task: Task): Promise<Task>;
    updateTaskById(data: Partial<Task>, id: number): Promise<Task>;
    updateTaskStatus( id: number): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}