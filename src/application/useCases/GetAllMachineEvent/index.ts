import { PrismaMachineEventsRepository } from "../../../infra/repository/PrismaMachineEventsRepository";
import { GetAllMachineEventController } from "./GetAllMachineEventController";
import { GetAllMachineEventUseCase } from "./GetAllMachineEventUseCase";


const prismaMachineEventsRepository = new PrismaMachineEventsRepository();

const getAllMachineEventUseCase = new GetAllMachineEventUseCase(
    prismaMachineEventsRepository
);

const getAllMachineEventController = new GetAllMachineEventController(
    getAllMachineEventUseCase
);

export { getAllMachineEventController };