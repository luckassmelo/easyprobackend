import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTriggersRepository } from "../../../infra/repository/TriggersRepository";
import { PrismaTriggersType } from "../../../infra/repository/TriggersTypeRepository";
import { CreateTriggerController } from "./CreateTriggerController";
import { CreateTriggerUseCase } from "./CreateTriggerUseCase";



const prismaTriggersRepository = new PrismaTriggersRepository(
    connectionProductionManager
);
const prismaTriggersTypeRepository = new PrismaTriggersType(
    connectionProductionManager
);

const createTriggerUseCase = new CreateTriggerUseCase(
    prismaTriggersRepository,
    prismaTriggersTypeRepository
);

const createTriggerController = new CreateTriggerController(
    createTriggerUseCase
);

export { createTriggerUseCase, createTriggerController }