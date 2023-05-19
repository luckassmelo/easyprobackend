import { ILdapRepository } from "../../application/repositories/ILdapRepository";
import { User } from "./../../domain/entities/user";
import LdapAdapter from "../database/LdapAdapter"


export class LdapRepository implements ILdapRepository {

    constructor(
        private adapter: LdapAdapter
    ) { }

    async login(loginLdap: User): Promise<boolean> {

        await this.adapter.open();

        return new Promise((resolve, reject) => {
            this.adapter.connection.on('conectTimeout', (error: Error) => {
                if (error)reject(error);
            });
            this.adapter.connection.bind(`${loginLdap.props.windowsuser}@schott.org`, `${loginLdap.props.password}`, (error: any) => {
                if (error) {
                    resolve(false);
                    this.adapter.connection.destroy(error);
                }
                resolve(true);
                this.adapter.connection.destroy()
            })
        })

    }
}