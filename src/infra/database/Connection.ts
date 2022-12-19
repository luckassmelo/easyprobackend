export default interface Connection {
    query (statement: string, params: any): Promise<any | void | null>;
    insert(table: string, params: any): Promise<any | void | null>;	
    close(): Promise<void>;
}