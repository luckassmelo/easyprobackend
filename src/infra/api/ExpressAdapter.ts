import express, { NextFunction, Express, Request, Response, Router } from "express";
import { HttpServer } from "./HttpServer";
import compression from "compression";
import "express-async-errors";
import ErrorHandler from "./middlewares/ErrorHandler";
import NotFound from "./middlewares/NotFound";

export class ExpressAdapter implements HttpServer {
	app: Express;
	router: Router | any;

	constructor() {
		this.app = express();
		this.router = Router();
		this.app.use(compression());
		this.app.use('/', this.router)
		this.app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
			new ErrorHandler().handlerError(err,req,res,next)
		});
		this.app.use(new NotFound().notFoundHandler)
		this.app.use(express.json());
	}

	on(method: string, url: string, callback: Function): void {
		this.router[method](
			url,
			async function (req: Request, res: Response, next: NextFunction) {
				const output = await callback(req.params, req.body);
				res.json(output);
			},
		);
	}

	listen(port: number): void {
		console.log(`[SERVER] listening on port ${port}`);

		this.app.listen(port);
	}
}