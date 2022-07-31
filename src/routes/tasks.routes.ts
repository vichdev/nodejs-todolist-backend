import { Router, Request, Response } from "express";
import { Task } from "../models/Tasks";
import { v4 as uuidV4 } from "uuid";
import { TasksRepository } from "../repositories/TasksRepository";

const routes = Router();

const tasksRepository = new TasksRepository();

routes.post("/", (req: Request, res: Response) => {
  const { name, description, status } = req.body;

  tasksRepository.create({ name, description, status });

  return res.status(201).send();
});

routes.get("/", (req: Request, res: Response) => {});

export { routes };
