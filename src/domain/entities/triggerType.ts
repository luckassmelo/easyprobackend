import { Entity } from "../../core/domain/Entity";

type TriggerTypeProps = {
    description: string;
    status: boolean;
    unitOfMeasurement: string;
    isAccumulated: boolean;
    triggerId: number;
}

export class TriggerType extends Entity<TriggerTypeProps> {
    constructor(props: TriggerTypeProps, id: number) {
        super(props, id);
    }

    static create(props: TriggerTypeProps, id:number) {
        return new TriggerType(props, id);
    }
}