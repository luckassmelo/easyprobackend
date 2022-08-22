import { Entity } from "../../core/domain/Entity";

type MachineEventProps = {
    eventDate: Date;
    eventName: string;
    machine: string;
    workorder: string;
    statusCode: string;
    statusReason: string;
    value: number;
}

export class MachineEvent extends Entity<MachineEventProps> {
    constructor(
        props: MachineEventProps, id?: number    
    ){
        super(props, id);
    }
}