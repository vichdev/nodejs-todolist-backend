import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./deleteTaskUseCase";

class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteTaskUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteTaskController };
