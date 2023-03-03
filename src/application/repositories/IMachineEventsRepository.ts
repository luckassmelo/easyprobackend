import { MachineEventProps } from "../../core/types";

export interface IMachineEventsRepository {
  allMachineEvents(): Promise<MachineEventProps[]>;
  getMachineEventsByDateAndMachine(date: Date, machine: string): Promise<MachineEventProps[]>;
  downtimesMachineEvents(): Promise<MachineEventProps[]>;
}
