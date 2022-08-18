import express, { Request, Response } from "express";
import { HttpServer } from "./HttpServer";
import compression from "compression";



export class ExpressAdapter implements HttpServer{
    app: any;

    constructor() {
        this.app = express();
        this.app.use(compression());
    }

    on(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
			const output = await callback(req.params, req.body);
			res.json(output);
		});
    }

    listen(port: number): void {
        console.log(`[SERVER] listening on port ${port}`);
        
        this.app.listen(port)
    }
}