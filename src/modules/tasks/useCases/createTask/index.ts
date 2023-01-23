import { TasksRepository } from "../../repositories/TasksRepository";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { CreateTaskController } from "./createTaskController";

const tasksRepository = new TasksRepository();

const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
