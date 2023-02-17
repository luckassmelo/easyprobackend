import { connectionMdcPPB } from "../../../infra/database";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";
import { GetMachineEventByDateAndMachineController } from "./GetMachineEventByDateAndMachineController";
import { GetMachineEventByDateAndMachineUseCase } from "./GetMachineEventByDateAndMachineUseCase";

const machineEventsRepository = new MachineEventsRepository(connectionMdcPPB);
const getMachineEventByDateAndMachineUseCase =
  new GetMachineEventByDateAndMachineUseCase(machineEventsRepository);
const getMachineEventByDateAndMachineController =
  new GetMachineEventByDateAndMachineController(
    getMachineEventByDateAndMachineUseCase
  );

export { getMachineEventByDateAndMachineController };
