export interface HttpServer {
    on (method: string, url: string, callback: Function): void;
    listen (port: number): void;
    use(method: string, url: string, res: any): void;
}