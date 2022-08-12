import { ITasksRespository } from "../repositories/interfaces/ITasksRepository";

class DeleteTaskService {
  constructor(private tasksRepository: ITasksRespository) {}
  execute(id: string): void {
    const taskExists = this.tasksRepository.checkId(id);
    if (taskExists) {
      this.tasksRepository.delete(id);
    } else {
      throw new Error("Não foi possível deletar esta task.");
    }
  }
}

export { DeleteTaskService };
