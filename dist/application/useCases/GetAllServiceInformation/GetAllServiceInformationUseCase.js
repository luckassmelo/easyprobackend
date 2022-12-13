"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllServiceInformationUseCase = void 0;
class GetAllServiceInformationUseCase {
    constructor(triggersRepository, tasksRepository, machineEventsRepository, workOrderDetailsRepository) {
        this.triggersRepository = triggersRepository;
        this.tasksRepository = tasksRepository;
        this.machineEventsRepository = machineEventsRepository;
        this.workOrderDetailsRepository = workOrderDetailsRepository;
    }
    async execute() {
        const triggers = ((await this.triggersRepository.allTriggers()));
        const tasks = await this.tasksRepository.getAll();
        const machineEvents = (await this.machineEventsRepository.allMachineEvents());
        const workOrders = [];
        for (const event of machineEvents) {
            workOrders.push(event.workorder);
        }
        const workOrderDetailsRepository = await this.workOrderDetailsRepository.findMany(workOrders);
        return {
            triggers,
            tasks,
            machineEvents,
            workOrderDetailsRepository
        };
    }
}
exports.GetAllServiceInformationUseCase = GetAllServiceInformationUseCase;
//# sourceMappingURL=GetAllServiceInformationUseCase.js.map