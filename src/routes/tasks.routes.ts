import { Router, Request, Response } from "express";
import { TasksRepository } from "../modules/tasks/repositories/TasksRepository";
import { createTaskController } from "../modules/tasks/useCases/createTask";
import { deleteTaskController } from "../modules/tasks/useCases/deleteTask";
import { editTaskController } from "../modules/tasks/useCases/editTask";
import { getTaskController } from "../modules/tasks/useCases/getTask";

const routes = Router();

routes.post("/", (req: Request, res: Response): Response => {
  return createTaskController.handle(req, res);
});

routes.get("/", (req: Request, res: Response): Response => {
  return getTaskController.handle(req, res);
});

routes.delete("/:id", (req: Request, res: Response): Response => {
  return deleteTaskController.handle(req, res);
});

routes.put("/:id", (req: Request, res: Response): Response => {
  return editTaskController.handle(req, res);
});

export { routes };
