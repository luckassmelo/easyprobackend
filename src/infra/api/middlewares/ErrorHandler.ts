import { NextFunction, Request, Response } from "express";
import { syncWriteFile } from "../helpers/writeFunction";

export default class ErrorHandler {
	public async handlerError(
		err: Error,
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const date = new Date().toLocaleString();

		const logs = {
			time: date,
			RequestURL: req.originalUrl,
			RequestType: req.method,
			Statuscode: res.statusCode,
		};

		const StringLogs = `[${logs.time}] Request Url: ${logs.RequestURL}, Request Type: '${logs.RequestType}'`;

		console.log("🔥 Error attaching user to req: %o", err);

		syncWriteFile(
			"../../../../logs/error.log",
			`${StringLogs} ${err.stack}\n`,
		);

		next(err.message);
	}
}
