import { Task } from "../domain/models/task";


export class TaskRepository {
    private tasks: Task[] = [];
    currentId = 1;


    async listTasks(): Promise<Task[]> {
        return this.tasks;
    }

    async createTasks(task: Task): Promise<Task> {
        task.id = this.currentId++;
        this.tasks.push(task);
        return task
    }

    async updateTaskById(data: Partial<Task>,  id: number): Promise<Task> {
        const task = this.tasks.find(task => task.id === id);

    if (!task) {
        throw new Error("error: Task não encontrada");
    }

    if (data.title !== undefined) task.title = data.title;
    if (data.description !== undefined) task.description = data.description;
    return task;
    }


    async deleteTasks(id: number): Promise<void> {
        const taskID = id;
        const index = this.tasks.findIndex(t => t.id === taskID);

        if (index === -1) {
            throw new Error("error: Task não encontrada");
        }

        this.tasks.splice(index, 1);


    }

}