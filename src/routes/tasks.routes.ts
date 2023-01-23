import { Router, Request, Response } from "express";
import { TasksRepository } from "../modules/tasks/repositories/TasksRepository";
import { EditTaskService } from "../modules/tasks/services/EditTaskService";
import { createTaskController } from "../modules/tasks/useCases/createTask";
import { deleteTaskController } from "../modules/tasks/useCases/deleteTask";
import { editTaskController } from "../modules/tasks/useCases/editTask";

const routes = Router();

const tasksRepository = new TasksRepository();

routes.post("/", (req: Request, res: Response): Response => {
  return createTaskController.handle(req, res);
});

routes.get("/", (req: Request, res: Response): Response => {
  const { priority } = req.query;
  const { status } = req.query;
  const allTasks = tasksRepository.list();

  if (priority && status) {
    const filtered = allTasks.filter(
      (task) =>
        task.priority === Number(priority) && task.status === Number(status)
    );

    return res.json(filtered);
  }
  if (status) {
    const filtered = allTasks.filter((task) => task.status === Number(status));
    return res.json(filtered);
  }
  if (priority) {
    const filtered = allTasks.filter(
      (task) => task.priority === Number(priority)
    );
    return res.json(filtered);
  }

  return res.json(allTasks);
});

routes.delete("/:id", (req: Request, res: Response): Response => {
  return deleteTaskController.handle(req, res);
});

routes.put("/:id", (req: Request, res: Response): Response => {
  return editTaskController.handle(req, res);
});

export { routes };
