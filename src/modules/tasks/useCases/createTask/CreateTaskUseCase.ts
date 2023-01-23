import { ITasksRespository } from "../../repositories/interfaces/ITasksRepository";

interface IRequest {
  name: string;
  description: string;
  status: number;
  priority: number;
}

class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRespository) {}
  execute({ name, description, status, priority }: IRequest): void {
    const taskAlreadyExists = this.tasksRepository.findTaskByName(name);

    if (taskAlreadyExists) {
      throw new Error("Task already exists!");
    }
    this.tasksRepository.create({ name, description, status, priority });
  }
}

export { CreateTaskUseCase };
