import { Entity } from "../../core/domain/Entity";

type TriggerProps = {
    name: string;
    piecesValue: number | null;
    statusValue: string | null;
    status: boolean;
    oeeId?: number | null;
    groupId?: number | null;
    userId: number;
    triggerTypeId: number;
    isProductiveTime: boolean;
    createdAt?: Date;
}

type TriggerResponse = {
    id: number;
    name: string;
    pieces_value: number | null;
    status_value: string | null;
    group_name: string | null;
    area: string;
    machine: string | null;
    entered_value: string | null;
    conditional_values: string | null;
    logical_operators: string | null;
    logical_expression: string | null;
    id_trigger_type: number;
    trigger_type: string;
    is_productive_time: boolean;
    status: boolean;
    conditional_types: string | null;
}

export class Trigger extends Entity<TriggerProps> {
    constructor(props: TriggerProps, id?: number) {
        super(props, id);
    }

    static create(props: TriggerProps, id: number) {
        return new Trigger(props, id);
    }

    static convertArrayToObject(triggers: Array<TriggerResponse>) {
        const triggersObject: any = {};

        triggers.forEach(trigger => {
            triggersObject[trigger.area] = trigger;
        });

        return triggersObject;
    }

}