"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTriggerUseCase = exports.getAllTaskController = void 0;
const index_1 = require("../../../infra/database/index");
const TasksRepository_1 = require("../../../infra/repository/TasksRepository");
const GetAllTaskController_1 = require("./GetAllTaskController");
const GetAllTaskUseCase_1 = require("./GetAllTaskUseCase");
const prismaTasksRepository = new TasksRepository_1.PrismaTasksRepository(index_1.connectionProductionManager);
const getAllTriggerUseCase = new GetAllTaskUseCase_1.GetAllTaskUseCase(prismaTasksRepository);
exports.getAllTriggerUseCase = getAllTriggerUseCase;
const getAllTaskController = new GetAllTaskController_1.GetAllTaskController(getAllTriggerUseCase);
exports.getAllTaskController = getAllTaskController;
//# sourceMappingURL=index.js.map