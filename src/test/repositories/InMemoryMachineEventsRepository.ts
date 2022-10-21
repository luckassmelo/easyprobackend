import { IMachineEventsRepository } from "../../application/repositories/IMachineEventsRepository";
import { MachineEvent } from "../../domain/entities/machineEvent";

export class InMemoryMachineEventsRepository
  implements IMachineEventsRepository
{
  public machineEvents: MachineEvent[] = [];

  async allMachineEvents(): Promise<MachineEvent[]> {
    const machineEvents: MachineEvent[] = this.machineEvents;

    return machineEvents;
  }
}
