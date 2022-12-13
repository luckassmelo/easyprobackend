"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTriggerController = exports.createTriggerUseCase = void 0;
const index_1 = require("../../../infra/database/index");
const TriggersRepository_1 = require("../../../infra/repository/TriggersRepository");
const TriggersTypeRepository_1 = require("../../../infra/repository/TriggersTypeRepository");
const CreateTriggerController_1 = require("./CreateTriggerController");
const CreateTriggerUseCase_1 = require("./CreateTriggerUseCase");
const prismaTriggersRepository = new TriggersRepository_1.PrismaTriggersRepository(index_1.connectionProductionManager);
const prismaTriggersTypeRepository = new TriggersTypeRepository_1.PrismaTriggersType(index_1.connectionProductionManager);
const createTriggerUseCase = new CreateTriggerUseCase_1.CreateTriggerUseCase(prismaTriggersRepository, prismaTriggersTypeRepository);
exports.createTriggerUseCase = createTriggerUseCase;
const createTriggerController = new CreateTriggerController_1.CreateTriggerController(createTriggerUseCase);
exports.createTriggerController = createTriggerController;
//# sourceMappingURL=index.js.map