import { Task } from "../models/Tasks";

interface ICreateTaskDTO {
  name: string;
  description: string;
  status: boolean;
}

class TasksRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  create({ description, name, status }: ICreateTaskDTO): void {
    const task = new Task();

    Object.assign(task, {
      name,
      description,
      status,
      created_at: new Date(),
    });

    this.tasks.push(task);
  }
}

export { TasksRepository };
