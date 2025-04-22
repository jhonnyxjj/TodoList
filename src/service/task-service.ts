import { TaskRepository } from "../repositories/task-repository";
import { Task } from "../domain/models/task";
import { IService } from "../domain/interfaces/interface-iservice";
import {validateTaskTitleNotExist } from "../utils/validation/validate-task";



export class TaskService implements IService {

    constructor(private taskRepository: TaskRepository) { }
    async listTasks(): Promise<Task[]> {
        return this.taskRepository.listTasks();
    }
    async createTasks(task: Task): Promise<Task> {
        if (!task.title || task.title.trim().length < 3) {throw new Error("O título da tarefa deve ter pelo menos 3 caracteres.");}

        await validateTaskTitleNotExist(this.taskRepository, task.title);

        const newTask = await this.taskRepository.createTasks(task);
        return newTask;

    }
    async updateTaskById(data: Partial<Task>, id: number): Promise<Task> {

        if (!data.title || data.title.trim().length < 3) { throw new Error("O título da tarefa deve ter pelo menos 3 caracteres.");}
        if (!data.title) { throw new Error("O titulo da task é obrigatorio");}
        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}
        
        await validateTaskTitleNotExist(this.taskRepository, data.title);
    
        const updatedTask = await this.taskRepository.updateTaskById(data, id);

        return updatedTask;

    }

    async updateTaskStatus(id: number, completed: boolean): Promise<Task> {
        throw new Error("Method not implemented.");
    }

    
    async deleteTasks(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}