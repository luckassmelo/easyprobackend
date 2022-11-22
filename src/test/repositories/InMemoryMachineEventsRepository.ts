import { IMachineEventsRepository } from "../../application/repositories/IMachineEventsRepository";
import { MachineEventProps } from "../../core/types";
import { MachineEvent } from "../../domain/entities/machineEvent";

export class InMemoryMachineEventsRepository
  implements IMachineEventsRepository
{
  public machineEvents: MachineEventProps[] = [];

  async allMachineEvents(): Promise<MachineEventProps[]> {
    const machineEvents: MachineEventProps[] = this.machineEvents;

    return machineEvents;
  }
}
