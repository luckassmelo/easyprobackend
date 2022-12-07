import { MachineEventProps } from "../../core/types";

export interface IMachineEventsRepository {
    allMachineEvents(): Promise<MachineEventProps[]>;
}