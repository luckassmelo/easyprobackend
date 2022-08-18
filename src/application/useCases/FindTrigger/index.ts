import { PrismaTriggersRepository } from "../../../infra/repository/PrismaTriggersRepository";
import { FindTriggerController } from "./FindTriggerController";
import { FindTriggerUseCase } from "./FindTriggerUseCase";


const prismaTriggersRepository = new PrismaTriggersRepository();

const findTriggerUseCase = new FindTriggerUseCase(
    prismaTriggersRepository
);

const findTriggerController = new FindTriggerController(
    findTriggerUseCase
);

export { findTriggerUseCase, findTriggerController };