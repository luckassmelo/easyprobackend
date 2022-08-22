import { connectionProductionManager } from "../../../infra/database/index";
import { PrismaTriggersRepository } from "../../../infra/repository/TriggersRepository";
import { FindTriggerController } from "./FindTriggerController";
import { FindTriggerUseCase } from "./FindTriggerUseCase";


const prismaTriggersRepository = new PrismaTriggersRepository(
    connectionProductionManager
);

const findTriggerUseCase = new FindTriggerUseCase(
    prismaTriggersRepository
);

const findTriggerController = new FindTriggerController(
    findTriggerUseCase
);

export { findTriggerUseCase, findTriggerController };