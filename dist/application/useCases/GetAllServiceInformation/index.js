"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllServiceInformationController = void 0;
const index_1 = require("../../../infra/database/index");
const MachineEventsRepository_1 = require("../../../infra/repository/MachineEventsRepository");
const TasksRepository_1 = require("../../../infra/repository/TasksRepository");
const TriggersRepository_1 = require("../../../infra/repository/TriggersRepository");
const WorkOrderDetailsRepository_1 = require("../../../infra/repository/WorkOrderDetailsRepository");
const GetAllServiceInformationController_1 = require("./GetAllServiceInformationController");
const GetAllServiceInformationUseCase_1 = require("./GetAllServiceInformationUseCase");
const triggersRepository = new TriggersRepository_1.PrismaTriggersRepository(index_1.connectionProductionManager);
const tasksRepository = new TasksRepository_1.PrismaTasksRepository(index_1.connectionProductionManager);
const machineEventsRepository = new MachineEventsRepository_1.MachineEventsRepository(index_1.connectionMdcPPB);
const workOrderDetailsRepository = new WorkOrderDetailsRepository_1.WorkOrderDetailsRepository(index_1.connectionCronetwork);
const getAllServiceInformationUseCase = new GetAllServiceInformationUseCase_1.GetAllServiceInformationUseCase(triggersRepository, tasksRepository, machineEventsRepository, workOrderDetailsRepository);
const getAllServiceInformationController = new GetAllServiceInformationController_1.GetAllServiceInformationController(getAllServiceInformationUseCase);
exports.getAllServiceInformationController = getAllServiceInformationController;
//# sourceMappingURL=index.js.map