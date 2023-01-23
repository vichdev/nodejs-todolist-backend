import { TasksRepository } from "../../repositories/TasksRepository";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { CreateTaskController } from "./createTaskController";

const tasksRepository = TasksRepository.getInstance();

const createTaskUseCase = new CreateTaskUseCase(tasksRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
