import { Entity } from "../../core/domain/Entity";

type TriggerProps = {
    description: string;
    triggerTypeId: number;
    value: number;
    status: boolean;
    group?: string | null;
    machine?: string | null;
    userId: number;
    createdAt?: Date;
}

export class Trigger extends Entity<TriggerProps> {
    constructor(props: TriggerProps, id?: number) {
        super(props, id);
    }

    static create(props: TriggerProps, id: number) {
        return new Trigger(props, id);
    }

}