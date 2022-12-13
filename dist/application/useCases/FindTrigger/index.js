"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTriggerController = exports.findTriggerUseCase = void 0;
const index_1 = require("../../../infra/database/index");
const TriggersRepository_1 = require("../../../infra/repository/TriggersRepository");
const FindTriggerController_1 = require("./FindTriggerController");
const FindTriggerUseCase_1 = require("./FindTriggerUseCase");
const prismaTriggersRepository = new TriggersRepository_1.PrismaTriggersRepository(index_1.connectionProductionManager);
const findTriggerUseCase = new FindTriggerUseCase_1.FindTriggerUseCase(prismaTriggersRepository);
exports.findTriggerUseCase = findTriggerUseCase;
const findTriggerController = new FindTriggerController_1.FindTriggerController(findTriggerUseCase);
exports.findTriggerController = findTriggerController;
//# sourceMappingURL=index.js.map