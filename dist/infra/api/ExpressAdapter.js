"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAdapter = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
class ExpressAdapter {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
    }
    on(method, url, callback) {
        this.app[method](url, async function (req, res) {
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