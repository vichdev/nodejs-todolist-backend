import { Request, Response } from "express";
import { GetTaskUseCase } from "./getTaskUseCase";

class GetTaskController {
  constructor(private getTaskUseCase: GetTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { priority, status } = request.query;
    const allTasks = this.getTaskUseCase.execute();

    if (priority && status) {
      const filtered = allTasks.filter(
        (task) =>
          task.priority === Number(priority) && task.status === Number(status)
      );

      return response.json(filtered);
    }
    if (status) {
      const filtered = allTasks.filter(
        (task) => task.status === Number(status)
      );
      return response.json(filtered);
    }
    if (priority) {
      const filtered = allTasks.filter(
        (task) => task.priority === Number(priority)
      );
      return response.json(filtered);
    }

    return response.json(allTasks);
  }
}

export { GetTaskController };
