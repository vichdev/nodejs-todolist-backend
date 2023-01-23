import { TasksRepository } from "../../repositories/TasksRepository";
import { DeleteTaskController } from "./deleteTaskController";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";

const tasksRepository = new TasksRepository();

const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);

const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskController };
