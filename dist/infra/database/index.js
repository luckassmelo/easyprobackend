"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionCronetwork = exports.connectionProductionManager = exports.connectionMdcPPB = void 0;
const database_1 = require("../../config/database");
const MSSQLAdapter_1 = __importDefault(require("./MSSQLAdapter"));
const PostgreSQLAdapter_1 = __importDefault(require("./PostgreSQLAdapter"));
const connectionMdcPPB = new PostgreSQLAdapter_1.default(database_1.passMdcPPB);
exports.connectionMdcPPB = connectionMdcPPB;
const connectionProductionManager = new PostgreSQLAdapter_1.default(database_1.productionManager);
exports.connectionProductionManager = connectionProductionManager;
const connectionCronetwork = new MSSQLAdapter_1.default(database_1.cronetwork);
exports.connectionCronetwork = connectionCronetwork;
//# sourceMappingURL=index.js.map