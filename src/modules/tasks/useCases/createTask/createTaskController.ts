import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle(request: Request, reponse: Response): Response {
    const { name, description, status, priority } = request.body;

    if (!name) {
      return reponse.status(500).send();
    }

    this.createTaskUseCase.execute({ name, description, status, priority });

    return reponse.status(201).send();
  }
}

export { CreateTaskController };
