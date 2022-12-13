"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const writeFunction_1 = require("../helpers/writeFunction");
class ErrorHandler {
    async handlerError(err, req, res, next) {
        const date = new Date().toLocaleString();
        const logs = {
            time: date,
            RequestURL: req.originalUrl,
            RequestType: req.method,
            Statuscode: res.statusCode,
        };
        const StringLogs = `[${logs.time}] Request Url: ${logs.RequestURL}, Request Type: '${logs.RequestType}'`;
        console.log("🔥 Error attaching user to req: %o", err);
        (0, writeFunction_1.syncWriteFile)("../../../../logs/error.log", `${StringLogs} ${err.stack}\n`);
        next(err.message);
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map