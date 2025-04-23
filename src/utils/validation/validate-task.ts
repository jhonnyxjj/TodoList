import { TaskRepository } from "../../repositories/task-repository";

export async function validateTaskTitleNotExist(
    taskRepository: TaskRepository, 
    title: string
  ): Promise<void> {
      const existingTask = await taskRepository.listTasks().then(tasks => tasks.find(task => task.title === title));
      if (existingTask) {
          throw new Error("Já existe uma task com esse nome.");
      }
  }

