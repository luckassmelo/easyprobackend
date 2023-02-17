import { MachineEventProps } from "../../../core/types";
import { MachineEventsRepository } from "../../../infra/repository/MachineEventsRepository";

export class GetMachineEventByDateAndMachineUseCase {
  constructor(private machineEventsRepository: MachineEventsRepository) {}

  async execute(date: Date, machine: String): Promise<MachineEventProps[]> {
    return this.machineEventsRepository.getMachineEventsByDateAndMachine(date, machine);
  }
}
