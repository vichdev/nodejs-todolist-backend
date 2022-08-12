import { Task } from "../models/Tasks";
import {
  ICreateTaskDTO,
  ITasksRespository,
} from "./interfaces/ITasksRepository";

class TasksRepository implements ITasksRespository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  create({ description, name, status, priority }: ICreateTaskDTO): void {
    const task = new Task();

    Object.assign(task, {
      name,
      description,
      status,
      priority,
      created_at: new Date(),
    });

    this.tasks.push(task);
  }

  delete(id: string): void {
    const deleted = this.tasks.find((task) => task.id === id);
    if (deleted) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  }

  list(): Task[] {
    return this.tasks;
  }

  findTaskByName(name: string): Task {
    const task = this.tasks.find((task) => task.name === name);
    return task;
  }

  checkId(id: string): Task {
    const taskId = this.tasks.find((task) => task.id === id);
    return taskId;
  }
}

export { TasksRepository };
