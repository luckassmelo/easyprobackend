import { MachineEventProps, WorkOrderMap } from "../../../core/types";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";
import { WorkOrderDetailsRepository } from '../../../infra/repository/WorkOrderDetailsRepository';

type MachineEventsAndWorkOrderDetailsResponse = {
    machineEvents: MachineEventProps[],
    workOrderDetails: WorkOrderMap
}

export class GetMachineEventByDateAndMachineUseCase {
  constructor(private machineEventsRepository: MachineEventsRepository,
              private workOrderDetailsRepository: WorkOrderDetailsRepository) {}

  async execute(date: Date, machine: String): Promise<MachineEventsAndWorkOrderDetailsResponse> {
    const machineEventsResponse = await this.machineEventsRepository.getMachineEventsByDateAndMachine(date, machine);

    const workOrders: string[] = [];
    machineEventsResponse.forEach((event) => {
      if(!workOrders.includes(event.workorder) && event.workorder)
         workOrders.push(event.workorder);
    });

    const workOrderDetailsResponse = await this.workOrderDetailsRepository.findMany(workOrders);

    return {
      machineEvents: machineEventsResponse,
      workOrderDetails: workOrderDetailsResponse
    };

  }
}
