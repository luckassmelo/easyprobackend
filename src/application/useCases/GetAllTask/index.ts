import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { GetAllTaskController } from "./GetAllTaskController";
import { GetAllTaskUseCase } from "./GetAllTaskUseCase";

const prismaTasksRepository = new PrismaTasksRepository(
    connectionProductionManager
);

const getAllTriggerUseCase = new GetAllTaskUseCase(
    prismaTasksRepository
);

const getAllTaskController = new GetAllTaskController (
    getAllTriggerUseCase
);

export {getAllTaskController, getAllTriggerUseCase};