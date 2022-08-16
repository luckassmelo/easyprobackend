import { PrismaTriggersRepository } from "../../repositories/implementations/PrismaTriggersRepository";
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