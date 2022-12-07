"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closedTaskController = exports.closedTaskUseCase = void 0;
const database_1 = require("../../../infra/database");
const TasksRepository_1 = require("../../../infra/repository/TasksRepository");
const ClosedTaskController_1 = require("./ClosedTaskController");
const ClosedTaskUseCase_1 = require("./ClosedTaskUseCase");
const prismaClosedRepository = new TasksRepository_1.PrismaTasksRepository(database_1.connectionProductionManager);
const closedTaskUseCase = new ClosedTaskUseCase_1.ClosedTaskUseCase(prismaClosedRepository);
exports.closedTaskUseCase = closedTaskUseCase;
const closedTaskController = new ClosedTaskController_1.ClosedTaskController(closedTaskUseCase);
exports.closedTaskController = closedTaskController;
//# sourceMappingURL=index.js.map