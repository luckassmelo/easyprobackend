"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAdapter = void 0;
const express_1 = __importStar(require("express"));
const compression_1 = __importDefault(require("compression"));
require("express-async-errors");
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const NotFound_1 = __importDefault(require("./middlewares/NotFound"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("../docs/swagger.json"));
class ExpressAdapter {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = (0, express_1.Router)();
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
        this.app.use('/', this.router);
        this.app.use((err, req, res, next) => {
            new ErrorHandler_1.default().handlerError(err, req, res, next);
        });
        this.app.use(new NotFound_1.default().notFoundHandler);
        this.app.use(express_1.default.json());
    }
    on(method, url, callback) {
        this.router[method](url, async function (req, res, next) {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }
    listen(port) {
        console.log(`[SERVER] listening on port ${port}`);
        this.app.listen(port);
    }
}
exports.ExpressAdapter = ExpressAdapter;
//# sourceMappingURL=ExpressAdapter.js.map