
import { PrismaTasksRepository } from "../../../infra/repository/PrismaTasksRepository";
import { PrismaTriggersRepository } from "../../../infra/repository/PrismaTriggersRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const prismaTasksRepository = new PrismaTasksRepository();
const prismaTriggersRepository = new PrismaTriggersRepository();

const createTaskUseCase = new CreateTaskUseCase(
    prismaTriggersRepository,
    prismaTasksRepository
);

const createTaskController = new CreateTaskController(
    createTaskUseCase
);

export { createTaskUseCase, createTaskController }