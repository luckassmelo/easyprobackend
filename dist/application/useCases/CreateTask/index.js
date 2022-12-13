"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = exports.createTaskUseCase = void 0;
const index_1 = require("../../../infra/database/index");
const TasksRepository_1 = require("../../../infra/repository/TasksRepository");
const TriggersRepository_1 = require("../../../infra/repository/TriggersRepository");
const CreateTaskController_1 = require("./CreateTaskController");
const CreateTaskUseCase_1 = require("./CreateTaskUseCase");
const prismaTasksRepository = new TasksRepository_1.PrismaTasksRepository(index_1.connectionProductionManager);
const prismaTriggersRepository = new TriggersRepository_1.PrismaTriggersRepository(index_1.connectionProductionManager);
const createTaskUseCase = new CreateTaskUseCase_1.CreateTaskUseCase(prismaTriggersRepository, prismaTasksRepository);
exports.createTaskUseCase = createTaskUseCase;
const createTaskController = new CreateTaskController_1.CreateTaskController(createTaskUseCase);
exports.createTaskController = createTaskController;
//# sourceMappingURL=index.js.map