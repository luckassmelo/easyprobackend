import { PrismaTriggersRepository } from "../../../infra/repository/PrismaTriggersRepository";
import { PrismaTriggersType } from "../../../infra/repository/PrismaTriggersTypeRepository";
import { CreateTriggerController } from "./CreateTriggerController";
import { CreateTriggerUseCase } from "./CreateTriggerUseCase";

const prismaTriggersRepository = new PrismaTriggersRepository();
const prismaTriggersTypeRepository = new PrismaTriggersType();

const createTriggerUseCase = new CreateTriggerUseCase(
    prismaTriggersRepository,
    prismaTriggersTypeRepository
);

const createTriggerController = new CreateTriggerController(
    createTriggerUseCase
);

export { createTriggerUseCase, createTriggerController }