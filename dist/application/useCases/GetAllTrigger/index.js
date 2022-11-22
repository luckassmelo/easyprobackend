"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTriggerUseCase = exports.getAllTriggerController = void 0;
const index_1 = require("../../../infra/database/index");
const TriggersRepository_1 = require("../../../infra/repository/TriggersRepository");
const GetAllTriggerController_1 = require("./GetAllTriggerController");
const GetAllTriggerUseCase_1 = require("./GetAllTriggerUseCase");
const prismaTriggersRepository = new TriggersRepository_1.PrismaTriggersRepository(index_1.connectionProductionManager);
const getAllTriggerUseCase = new GetAllTriggerUseCase_1.GetAllTriggerUseCase(prismaTriggersRepository);
exports.getAllTriggerUseCase = getAllTriggerUseCase;
const getAllTriggerController = new GetAllTriggerController_1.GetAllTriggerController(getAllTriggerUseCase);
exports.getAllTriggerController = getAllTriggerController;
//# sourceMappingURL=index.js.map