import { TasksRepository } from "../../repositories/TasksRepository";

interface IRequest {
  name: string;
  description: string;
  status: number;
  priority: number;
}

class EditTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}
  execute(id: string, { name, description, status, priority }: IRequest): void {
    const taskExists = this.tasksRepository.checkId(id);
    if (taskExists) {
      this.tasksRepository.updateTask(id, {
        name,
        description,
        status,
        priority,
      });
    } else {
      throw new Error("Não foi possível editar esta task.");
    }
  }
}

export { EditTaskUseCase };
