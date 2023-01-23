import { TasksRepository } from "../../repositories/TasksRepository";
import { EditTaskController } from "./editTaskController";
import { EditTaskUseCase } from "./editTaskUseCase";

const tasksRepository = new TasksRepository();

const editTaskUseCase = new EditTaskUseCase(tasksRepository);

const editTaskController = new EditTaskController(editTaskUseCase);

export { editTaskController };
