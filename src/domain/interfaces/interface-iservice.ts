import { Task } from "../models/task";


export interface IService {
    listTasks(): Promise<Task[]>;
    createTasks(task: Task): Promise<Task>;
    updateTaskById(data: Partial<Task>, id: number): Promise<Task>;
    updateTaskStatus( id: number): Promise<Task>;
    deleteTasks(id: number): Promise<void>;
}