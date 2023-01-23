import { TasksRepository } from "../../repositories/TasksRepository";
import { GetTaskController } from "./getTaskController";
import { GetTaskUseCase } from "./getTaskUseCase";

const tasksRepository = TasksRepository.getInstance();

const getTaskUseCase = new GetTaskUseCase(tasksRepository);

const getTaskController = new GetTaskController(getTaskUseCase);

export { getTaskController };
