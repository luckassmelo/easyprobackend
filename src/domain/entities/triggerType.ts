import { Entity } from "../../core/domain/Entity";

type TriggerTypeProps = {
    name: string;
    status: boolean;
    isProductiveTime: boolean;
}

export class TriggerType extends Entity<TriggerTypeProps> {
    constructor(props: TriggerTypeProps, id: number) {
        super(props, id);
    }

    static create(props: TriggerTypeProps, id:number) {
        return new TriggerType(props, id);
    }
}