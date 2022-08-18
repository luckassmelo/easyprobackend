import { PrismaTriggersRepository } from "../../../infra/repository/PrismaTriggersRepository";
import { GetAllTriggerController } from "./GetAllTriggerController";
import { GetAllTriggerUseCase } from "./GetAllTriggerUseCase";

const prismaTriggersRepository = new PrismaTriggersRepository();

const getAllTriggerUseCase = new GetAllTriggerUseCase(
    prismaTriggersRepository
);

const getAllTriggerController = new GetAllTriggerController(
    getAllTriggerUseCase
);

export { getAllTriggerController, getAllTriggerUseCase };