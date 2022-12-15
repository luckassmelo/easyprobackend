import { Entity } from "../../core/domain/Entity";

type UserProps = {
    username: string,
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