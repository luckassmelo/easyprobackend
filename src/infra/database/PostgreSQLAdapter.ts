import Connection from "./Connection";
import Knex from "knex";
import type { Knex as KnexApplication } from "knex";


export default class PostgresSQLAdapter {
    connection: KnexApplication;

    constructor(databaseConnection: any) {

        this.connection = Knex({
            client: 'pg',
            connection: {
               ...databaseConnection
            },
            pool: { min: 0, max: 10, },
            // acquireTimeout: 60000 //60 seconds
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