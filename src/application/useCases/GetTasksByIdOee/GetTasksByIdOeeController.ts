import { GetTasksByIdOeeUseCase } from "./GetTasksByIdOeeUseCase";

export class GetTasksByIdOeeController {
  constructor(private getTasksByIdOeeUseCase: GetTasksByIdOeeUseCase) {}

  handle(id: number, closed: boolean): Promise<any> {
    return this.getTasksByIdOeeUseCase.execute(id, closed);
  }
}
