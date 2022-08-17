import { Router, Request, Response } from "express";
import { TasksRepository } from "../repositories/TasksRepository";
import { CreateTaskService } from "../services/CreateTaskService";
import { DeleteTaskService } from "../services/DeleteTaskService";
import { EditTaskService } from "../services/EditTaskService";

const routes = Router();

const tasksRepository = new TasksRepository();

routes.post("/", (req: Request, res: Response): Response => {
  const { name, description, status, priority } = req.body;

  const createTaskService = new CreateTaskService(tasksRepository);

  createTaskService.execute({ name, description, status, priority });

  return res.status(201).send();
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
  const { id } = req.params;

  const deleteTaskService = new DeleteTaskService(tasksRepository);

  deleteTaskService.execute(id);

  return res.status(200).send();
});

routes.put("/:id", (req: Request, res: Response): Response => {
  const { id } = req.params;
  const { name, description, status, priority } = req.body;

  const editTaskService = new EditTaskService(tasksRepository);

  if (!name || !description) {
    return res.status(500).send();
  } else {
    editTaskService.execute(id, {
      name,
      description,
      status,
      priority,
    });

    return res.status(201).send();
  }
});

export { routes };
