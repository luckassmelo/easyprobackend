import { ILdapRepository } from "../../application/repositories/ILdapRepository";
import { User } from "./../../domain/entities/user";
import ldap from "ldapjs";
// import LdapAdapter from "../database/LdapAdapter"
import { credentials } from "./../../config/database";


export class ldapLogon implements ILdapRepository {

    constructor(
        // adapter: LdapAdapter
    ) { }
    async login(loginLdap: User): Promise<boolean> {

        const server = ldap.createClient({
            url: `ldap://${credentials.host}`,
            timeout: 5000,
            connectTimeout: 6000,
            reconnect: false
        })


        server.on('conectTimeout', (error) => {
            if (error) {
                console.log(error);
            }
        });

        server.bind(`${loginLdap.props.username}@schott.org`, `${loginLdap.props.password}`, (error: any) => {
            if (error) {
                console.log('🛑😡 NÃO AUTORIZADO!!! 😡🛑');
                
                server.destroy(error);
            }else{
                console.log('teste');
            }
        })

           return true; 

    }


}
