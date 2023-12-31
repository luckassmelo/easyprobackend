import express, { NextFunction, Express, Request, Response, Router } from "express";
import { HttpServer } from "./HttpServer";
import compression from "compression";
import "express-async-errors";
import NotFound from "./middlewares/NotFound";
import swaggerUi from "swagger-ui-express";
import Auth from "./middlewares/Authentication";
import cors from "cors";
import swaggerDocs from "../docs/swagger.json"
import { CustomErrorHandler } from "../../../_src/infra/api/handlers/error.handler";

export class ExpressAdapter implements HttpServer {
	app: Express;
	router: Router | any;

	constructor() {
		this.app = express();
		this.router = Router();
		this.app.use(express.json());
		this.app.use(compression());
		this.app.use(cors());
		this.app.use("/api/task/closed", new Auth().authmiddleware);
		this.app.use('/', this.router)
    	this.app.use(CustomErrorHandler.handleError)
		this.app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));		
		this.app.use(new NotFound().notFoundHandler);
	}

	on(method: string, url: string, callback: Function): void {
		this.router[method](
			url,
			async function (req: Request, res: Response, next: NextFunction) {

        const requestCustom = {
          ...req.params,
          ...req.query
        };

				const output = await callback(requestCustom, req.body);
				return res.json(output);
			},
		);
	}


	listen(port: number): void {
		console.log(`[SERVER] listening on port ${port}`);
		
		
		this.app.listen(port);
		
	}
}