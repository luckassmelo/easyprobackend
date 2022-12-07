import { Entity } from "../../core/domain/Entity";

type ClosedProps = {
    id: number,
    windowsUser: string,
    description: string,
    token?: string
}

export class Closed extends Entity<ClosedProps> {
    constructor(props: ClosedProps) {
        super(props);
    }

    static create(props: ClosedProps) {
        return new Closed({
            ...props
        });
    }
}