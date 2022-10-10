import { MachineEvent } from "../../domain/entities/machineEvent";

export interface IMachineEventsRepository {
    allMachineEvents(): Promise<MachineEvent[]>;
}