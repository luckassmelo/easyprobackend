import { Entity } from "../../core/domain/Entity";

type UserProps = {
    windowsuser: string,
    password: string;
    
}

export class User extends Entity<UserProps>{
    constructor(props: UserProps) {
        super(props);
    }

    static create(props: UserProps) {
        return new User({
            ...props
        });
    }

}