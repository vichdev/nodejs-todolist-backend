import { Task } from "../../model/Tasks";
import { TasksRepository } from "../../repositories/TasksRepository";

class GetTaskUseCase {
  constructor(private tasksRepository: TasksRepository) {}
  execute(): Task[] {
    const tasks = this.tasksRepository.list();
    console.log(tasks);

    return tasks;
  }
}

export { GetTaskUseCase };
