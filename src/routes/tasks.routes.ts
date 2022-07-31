import { Router, Request, Response } from "express";
import { ITask } from "../models/ITasks";
import { v4 as uuidV4 } from "uuid";

const routes = Router();

const tasks: ITask[] = [];

routes.post("/", (req: Request, res: Response) => {
  const { name, description, status } = req.body;

  const task: ITask = {
    name,
    description,
    status,
    created_at: new Date(),
    id: uuidV4(),
  };

  tasks.push(task);

  return res.status(201).send({ tasks });
});

routes.get("/", (req: Request, res: Response) => {});

export { routes };
