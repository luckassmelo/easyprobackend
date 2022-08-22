import Connection from "./Connection";
import Knex from "knex";


export default class PostgresSQLAdapter implements Connection {
    connection: any;

    constructor(databaseConnection: any) {
        
        this.connection = Knex({
            client: 'pg',
            connection: {
               ...databaseConnection
            },
        });
        
    }

    query(statement: string, params: any): Promise<any> {      
        return this.connection.raw(statement, params);
    }

    insert(table: string, params: any): Promise<any> {
        return this.connection(table).insert(params);
    }

    close(): Promise<void> {
        return this.connection.destroy();
    }

} 