"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMachineEventUseCase = void 0;
class GetAllMachineEventUseCase {
    constructor(machineEventsRepository) {
        this.machineEventsRepository = machineEventsRepository;
    }
    async execute() {
        return await this.machineEventsRepository.allMachineEvents();
    }
}
exports.GetAllMachineEventUseCase = GetAllMachineEventUseCase;
//# sourceMappingURL=GetAllMachineEventUseCase.js.map