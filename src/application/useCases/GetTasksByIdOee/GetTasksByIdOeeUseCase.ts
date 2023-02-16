import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";

export class GetTasksByIdOeeUseCase {
  constructor(private tasksRepository: PrismaTasksRepository) {}

  execute(id: number, closed: boolean): Promise<any> {
    return this.tasksRepository.findTaskByIdOee(id, closed);
  }
}
