
import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTriggersRepository } from "../../../infra/repository/TriggersRepository";
import { GetAllTriggerController } from "./GetAllTriggerController";
import { GetAllTriggerUseCase } from "./GetAllTriggerUseCase";

const prismaTriggersRepository = new PrismaTriggersRepository(
    connectionProductionManager
);

const getAllTriggerUseCase = new GetAllTriggerUseCase(
    prismaTriggersRepository
);

const getAllTriggerController = new GetAllTriggerController(
    getAllTriggerUseCase
);

export { getAllTriggerController, getAllTriggerUseCase };