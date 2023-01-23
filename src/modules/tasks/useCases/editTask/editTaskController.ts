import { Request, Response } from "express";
import { EditTaskUseCase } from "./editTaskUseCase";

class EditTaskController {
  constructor(private editTaskUseCase: EditTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { name, description, status, priority } = request.body;

    if (!name || !description) {
      return response.status(500).send();
    } else {
      this.editTaskUseCase.execute(id, {
        name,
        description,
        status,
        priority,
      });

      return response.status(201).send();
    }
  }
}

export { EditTaskController };
