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

export class Trigger extends Entity<TriggerProps> {
    constructor(props: TriggerProps, id?: number) {
        super(props, id);
    }

    static create(props: TriggerProps, id: number) {
        return new Trigger(props, id);
    }

    static convertArrayToObject(triggers: Trigger[]) {
        const triggersObject: any = {};

        triggers.forEach(trigger => {
            triggersObject[trigger.group] = trigger;
        });

        return triggersObject;
    }

}