

import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTasksRepository } from "../../../infra/repository/TasksRepository";
import { PrismaTriggersRepository } from "../../../infra/repository/TriggersRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const prismaTasksRepository = new PrismaTasksRepository(connectionProductionManager);
const prismaTriggersRepository = new PrismaTriggersRepository(connectionProductionManager);

const createTaskUseCase = new CreateTaskUseCase(
    prismaTriggersRepository,
    prismaTasksRepository
);

const createTaskController = new CreateTaskController(
    createTaskUseCase
);

export { createTaskUseCase, createTaskController }