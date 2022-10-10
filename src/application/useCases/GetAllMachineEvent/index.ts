import { connectionMdcPPB } from "../../../infra/database/index";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";
import { GetAllMachineEventController } from "./GetAllMachineEventController";
import { GetAllMachineEventUseCase } from "./GetAllMachineEventUseCase";

const machineEventsRepository = new MachineEventsRepository(connectionMdcPPB);

const getAllMachineEventUseCase = new GetAllMachineEventUseCase(
    machineEventsRepository
);

const getAllMachineEventController = new GetAllMachineEventController(
    getAllMachineEventUseCase
);

export { getAllMachineEventController };