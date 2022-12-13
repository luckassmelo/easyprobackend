"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressAdapter_1 = require("./infra/api/ExpressAdapter");
const Router_1 = __importDefault(require("./infra/api/Router"));
const httpServer = new ExpressAdapter_1.ExpressAdapter();
const router = new Router_1.default(httpServer);
router.init();
httpServer.listen(4000);
//# sourceMappingURL=main.js.map