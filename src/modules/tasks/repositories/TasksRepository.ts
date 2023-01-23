import { Task } from "../model/Tasks";
import {
  ICreateTaskDTO,
  ITasksRespository,
  IUpdateTaskDTO,
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

  updateTask(
    id: string,
    { name, description, status, priority }: IUpdateTaskDTO
  ): void {
    const newTask = {
      id,
      name,
      description,
      status,
      priority,
      created_at: new Date(),
    };

    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    this.tasks[taskIndex] = newTask;
  }

  checkId(id: string): Task {
    const taskId = this.tasks.find((task) => task.id === id);
    return taskId;
  }
}

export { TasksRepository };
