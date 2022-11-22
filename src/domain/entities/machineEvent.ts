import { Entity } from "../../core/domain/Entity";

type MachineEventProps = {
    eventDate: Date;
    eventName: string;
    machine: string;
    workorder: string;
    statusCode?: string;
    statusReason?: string;
    value: number;
}

export class MachineEvent extends Entity<MachineEventProps> {
    constructor(
        props: MachineEventProps, id?: number    
    ){
        super(props, id);
    }

    static convertArrayToObject(machineEvents: MachineEventProps[]) {
        const machineEventsObject: any = {};

        machineEvents.forEach(machineEvent => {
            machineEventsObject[machineEvent.machine] = machineEvent;
        });

        return machineEventsObject;
    }
}