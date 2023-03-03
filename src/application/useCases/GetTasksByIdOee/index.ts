import { connectionProductionManager } from "../../../infra/database";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { GetTasksByIdOeeController } from "./GetTasksByIdOeeController";
import { GetTasksByIdOeeUseCase } from "./GetTasksByIdOeeUseCase";

const tasksRepository = new PrismaTasksRepository(connectionProductionManager);
const getTasksByIdOeeUseCase = new GetTasksByIdOeeUseCase(tasksRepository);
const getTasksByIdOeeController = new GetTasksByIdOeeController(
  getTasksByIdOeeUseCase
);

export { getTasksByIdOeeController };
