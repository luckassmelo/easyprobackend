import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { FindTaskMachineController } from "./FindTaskMachineController";
import { FindTaskMachineUseCase } from "./FindTaskMachineUseCase";

const prismaTasksRepository = new PrismaTasksRepository(
    connectionProductionManager
);

const findTaskMachineUseCase = new FindTaskMachineUseCase(
    prismaTasksRepository
);

const findTaskMachineController = new FindTaskMachineController(
    findTaskMachineUseCase
);

export { findTaskMachineUseCase, findTaskMachineController }