import { Task } from "../../models/Tasks";

interface ITasksRespository {
  findTaskByName(name: string): Task;
  list(): Task[];
  create({ name, description, status, priority }: ICreateTaskDTO): void;
  delete(id: string): void;
  checkId(id: string): Task;
}

interface ICreateTaskDTO {
  name: string;
  description: string;
  status: number;
  priority: number;
}

interface IUpdateTaskDTO {
  name: string;
  description: string;
  status: number;
  priority: number;
}

export { ITasksRespository, ICreateTaskDTO, IUpdateTaskDTO };
