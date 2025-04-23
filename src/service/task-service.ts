import { TaskRepository } from "../repositories/task-repository";
import { Task } from "../domain/models/task";
import { IService } from "../domain/interfaces/interface-iservice";
import {validateTaskTitleNotExist } from "../utils/validation/validate-task";



export class TaskService implements IService {

    constructor(private taskRepository: TaskRepository) { }
    async listTasks(): Promise<Task[]> {
        return this.taskRepository.listTasks();
    }
    async createTasks(taskData: Partial<Task>): Promise<Task> {
        if (!taskData.title || taskData.title.trim().length < 3) {throw new Error("O título da tarefa deve ter pelo menos 3 caracteres.");}


        const taskWithDefaults = {
            ...taskData,
            completed: taskData.completed ?? false
        };

        await validateTaskTitleNotExist(this.taskRepository, taskData.title);

        const newTask = await this.taskRepository.createTasks(taskWithDefaults as Task);
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

    async updateTaskStatus(id: number): Promise<Task> {
        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}

        
        const updatedTaskStatus = await	this.taskRepository.updateTaskStatus(id);
        return updatedTaskStatus;
    }

    
    async deleteTasks(id: number): Promise<void> {
        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}
        await this.taskRepository.deleteTasks(id);
    }

}