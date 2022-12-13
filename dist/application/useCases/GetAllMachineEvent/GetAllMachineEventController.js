"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMachineEventController = void 0;
class GetAllMachineEventController {
    constructor(getAllMachineEventUseCase) {
        this.getAllMachineEventUseCase = getAllMachineEventUseCase;
    }
    async handle() {
        return await this.getAllMachineEventUseCase.execute();
    }
}
exports.GetAllMachineEventController = GetAllMachineEventController;
//# sourceMappingURL=GetAllMachineEventController.js.map