import { TaskRepository } from "../repositories/task-repository";
import { Task } from "../domain/models/task";
import { IService } from "../domain/interfaces/interface-task-service";




export class TaskService implements IService {
    login(email: any, password: any) {
        throw new Error("Method not implemented.");
    }

    constructor(private taskRepository: TaskRepository) { }
    async listTasks(): Promise<Task[]> {
        return this.taskRepository.listTasks();
    }
        async createTask(taskData: Partial<Task>): Promise<Task> {
            if (!taskData.title || taskData.title.trim().length < 3) {throw new Error("O título da tarefa deve ter pelo menos 3 caracteres.");}
            

            const taskWithDefaults = {
                ...taskData,
                completed: false
            };

            const newTask = await this.taskRepository.createTasks(taskWithDefaults as Task);
            return newTask;

        }
    async updateTaskById(data: Partial<Task>, id: number): Promise<Task> {

        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}
        
        const existTasks = await this.taskRepository.listTasks()
        .then(tasks => tasks.find(task => task.id === id));

        if (!existTasks) {throw new Error("Tarefa não encontrada.");}

        if(existTasks.completed) {throw new Error( "Não é possível alterar uma task já completada.");}
    
        const updatedTask = await this.taskRepository.updateTaskById(data, id);
        return updatedTask;

    }

    async updateTaskStatus(id: number): Promise<Task> {
        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}

        
        const updatedTaskStatus = await	this.taskRepository.updateTaskStatus(id);
        return updatedTaskStatus;
    }

    
    async deleteTask(id: number): Promise<void> {
        if (isNaN(id)) {throw new Error("O ID da task é inválido, ou não existe.");}
        await this.taskRepository.deleteTasks(id);
    }

}