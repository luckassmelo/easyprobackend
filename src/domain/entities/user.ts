import { Entity } from "../../core/domain/Entity";

type UserProps = {
    name: string;
}

export class User extends Entity<UserProps>{
    constructor(props: UserProps, id: number) {
        super(props, id);
    }

}