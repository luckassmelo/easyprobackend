import { User } from "../../domain/entities/user";

export interface ILdapRepository{
    login(loginLdap: User): Promise<boolean>;
}


