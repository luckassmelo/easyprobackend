import { CreateTriggerController } from "./CreateTriggerController";
import { PrismaTriggersRepository } from "../../repositories/implementations/PrismaTriggersRepository";
import { CreateTriggerUseCase } from "./CreateTriggerUseCase";
import { PrismaTriggersType } from "../../repositories/implementations/PrismaTriggersTypeRepository";

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