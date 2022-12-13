"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryMachineEventsRepository = void 0;
class InMemoryMachineEventsRepository {
    constructor() {
        this.machineEvents = [];
    }
    async allMachineEvents() {
        const machineEvents = this.machineEvents;
        return machineEvents;
    }
}
exports.InMemoryMachineEventsRepository = InMemoryMachineEventsRepository;
//# sourceMappingURL=InMemoryMachineEventsRepository.js.map