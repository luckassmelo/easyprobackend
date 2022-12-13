"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTaskMachineController = exports.findTaskMachineUseCase = void 0;
const index_1 = require("../../../infra/database/index");
const TasksRepository_1 = require("../../../infra/repository/TasksRepository");
const FindTaskMachineController_1 = require("./FindTaskMachineController");
const FindTaskMachineUseCase_1 = require("./FindTaskMachineUseCase");
const prismaTasksRepository = new TasksRepository_1.PrismaTasksRepository(index_1.connectionProductionManager);
const findTaskMachineUseCase = new FindTaskMachineUseCase_1.FindTaskMachineUseCase(prismaTasksRepository);
exports.findTaskMachineUseCase = findTaskMachineUseCase;
const findTaskMachineController = new FindTaskMachineController_1.FindTaskMachineController(findTaskMachineUseCase);
exports.findTaskMachineController = findTaskMachineController;
//# sourceMappingURL=index.js.map