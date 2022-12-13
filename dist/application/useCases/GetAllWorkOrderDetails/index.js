"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWorkOrderDetailsController = void 0;
const index_1 = require("../../../infra/database/index");
const WorkOrderDetailsRepository_1 = require("../../../infra/repository/WorkOrderDetailsRepository");
const GetAllWorkOrderDetailsController_1 = require("./GetAllWorkOrderDetailsController");
const GetAllWorkOrderDetailsUseCase_1 = require("./GetAllWorkOrderDetailsUseCase");
const workOrderDetailsRepository = new WorkOrderDetailsRepository_1.WorkOrderDetailsRepository(index_1.connectionCronetwork);
const getAllWorkOrderDetailsUseCase = new GetAllWorkOrderDetailsUseCase_1.GetAllWorkOrderDetailsUseCase(workOrderDetailsRepository);
const getAllWorkOrderDetailsController = new GetAllWorkOrderDetailsController_1.GetAllWorkOrderDetailsController(getAllWorkOrderDetailsUseCase);
exports.getAllWorkOrderDetailsController = getAllWorkOrderDetailsController;
//# sourceMappingURL=index.js.map