"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkOrderDetailsByArrayController = void 0;
const index_1 = require("../../../infra/database/index");
const WorkOrderDetailsRepository_1 = require("../../../infra/repository/WorkOrderDetailsRepository");
const GetWorkOrderDetailsByArrayController_1 = require("./GetWorkOrderDetailsByArrayController");
const GetWorkOrderDetailsByArrayUseCase_1 = require("./GetWorkOrderDetailsByArrayUseCase");
const workOrderDetailsRepository = new WorkOrderDetailsRepository_1.WorkOrderDetailsRepository(index_1.connectionCronetwork);
const getWorkOrderDetailsByArrayUseCase = new GetWorkOrderDetailsByArrayUseCase_1.GetWorkOrderDetailsByArrayUseCase(workOrderDetailsRepository);
const getWorkOrderDetailsByArrayController = new GetWorkOrderDetailsByArrayController_1.GetWorkOrderDetailsByArrayController(getWorkOrderDetailsByArrayUseCase);
exports.getWorkOrderDetailsByArrayController = getWorkOrderDetailsByArrayController;
//# sourceMappingURL=index.js.map