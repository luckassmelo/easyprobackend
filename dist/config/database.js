"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronetwork = exports.passMdcPPB = exports.productionManager = void 0;
require("dotenv/config");
exports.productionManager = {
    user: process.env.EASYPRO_USER,
    password: process.env.EASYPRO_PASS,
    host: process.env.EASYPRO_HOST,
    port: process.env.EASYPRO_PORT,
    database: process.env.EASYPRO_DATABASE
};
exports.passMdcPPB = {
    user: process.env.MDC_PPB_USER,
    password: process.env.MDC_PPB_PASS,
    host: process.env.MDC_PPB_HOST,
    port: process.env.MDC_PPB_PORT,
    database: process.env.MDC_PPB_DATABASE,
    ssl: { rejectUnauthorized: false }
};
exports.cronetwork = {
    user: process.env.CRONETWORK_USER,
    password: process.env.CRONETWORK_PASS,
    host: process.env.CRONETWORK_HOST,
    database: process.env.CRONETWORK_DATABASE,
    options: {
        port: Number(process.env.CRONETWORK_PORT),
        instanceName: process.env.CRONETWORK_INSTANCE,
    }
};
//# sourceMappingURL=database.js.map