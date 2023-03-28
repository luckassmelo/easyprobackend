import { connectionCronetwork, connectionMdcPPB } from "../../../infra/database";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";
import { WorkOrderDetailsRepository } from '../../../infra/repository/WorkOrderDetailsRepository';
import { GetMachineEventByDateAndMachineWithWorkOrderDetailsController } from "./GetMachineEventByDateAndMachineController";
import { GetMachineEventByDateAndMachineUseCase } from "./GetMachineEventByDateAndMachineUseCase";

const machineEventsRepository = new MachineEventsRepository(connectionMdcPPB);
const workOrderDetaisRepository = new WorkOrderDetailsRepository(connectionCronetwork)

const getMachineEventByDateAndMachineUseCase =
  new GetMachineEventByDateAndMachineUseCase(machineEventsRepository, workOrderDetaisRepository);
const getMachineEventByDateAndMachineWithWorkOrderDetailsController =
  new GetMachineEventByDateAndMachineWithWorkOrderDetailsController(
    getMachineEventByDateAndMachineUseCase
  );

export { getMachineEventByDateAndMachineWithWorkOrderDetailsController };
