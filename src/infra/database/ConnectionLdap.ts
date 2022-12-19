
export interface ConnectionLdap {
    open(): Promise<any>;
    close(): Promise<boolean>;
}