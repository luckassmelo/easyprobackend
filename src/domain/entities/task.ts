import { Entity } from "../../core/domain/Entity";

type TaskProps = {
    userId?: number | null;
    triggerId: number;
    name: string;
    closed: boolean;
    createdAt?: Date;
    idOee: number;
    description: string;
    idSite: number;
}

export class Task extends Entity<TaskProps> {
    constructor(props: TaskProps, id?: number) {
        super(props, id);
    }

    static create(props: TaskProps, id: number) {
        return new Task({
            ...props
        }, id);
    }
}