"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMachineEventController = void 0;
const index_1 = require("../../../infra/database/index");
const MachineEventsRepository_1 = require("../../../infra/repository/MachineEventsRepository");
const GetAllMachineEventController_1 = require("./GetAllMachineEventController");
const GetAllMachineEventUseCase_1 = require("./GetAllMachineEventUseCase");
const machineEventsRepository = new MachineEventsRepository_1.MachineEventsRepository(index_1.connectionMdcPPB);
const getAllMachineEventUseCase = new GetAllMachineEventUseCase_1.GetAllMachineEventUseCase(machineEventsRepository);
const getAllMachineEventController = new GetAllMachineEventController_1.GetAllMachineEventController(getAllMachineEventUseCase);
exports.getAllMachineEventController = getAllMachineEventController;
//# sourceMappingURL=index.js.map