import { TasksRepository } from "../../repositories/TasksRepository";
import { EditTaskController } from "./editTaskController";
import { EditTaskUseCase } from "./editTaskUseCase";

const tasksRepository = TasksRepository.getInstance();

const editTaskUseCase = new EditTaskUseCase(tasksRepository);

const editTaskController = new EditTaskController(editTaskUseCase);

export { editTaskController };
