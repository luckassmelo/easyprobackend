import ldap from 'ldapjs'
import {Client} from 'ldapjs'
import {ConnectionLdap} from './ConnectionLdap';


export default class LdapAdapter implements ConnectionLdap {
    connection: any;

    constructor(private ldapConnection: any) {}

    async open(): Promise<Client> { 
        this.connection = ldap.createClient(this.ldapConnection);
        return this.connection;
    }
    

    async close(): Promise<boolean> {
        return this.connection.destroy();
    }
}




                    