import { IMachineEventsRepository } from "../../repositories/IMachineEventsRepository";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { IWorkCentersRepository } from "../../repositories/IWorkCentersRepository";
import { IWorkOrderDetailsRepository } from "../../repositories/IWorkOrderDetailsRepository";


export class GetAllServiceInformationUseCase {
    constructor(
        private triggersRepository: ITriggersRepository,
        private tasksRepository: ITasksRepository,
        private machineEventsRepository: IMachineEventsRepository,
        private workOrderDetailsRepository: IWorkOrderDetailsRepository,
        private workCentersRepository: IWorkCentersRepository
    ){}

    async execute() {

        const triggers = ((await this.triggersRepository.allTriggers()));
        const tasks = await this.tasksRepository.getAll();
        const machineEvents = (await this.machineEventsRepository.allMachineEvents());
        const machineGroup = await this.workCentersRepository.allWorkCenters();

        const workOrders: string[] = machineEvents.map(event => event.workorder);

        const workOrderDetailsRepository = await this.workOrderDetailsRepository.findMany(workOrders);

        return {
            triggers,
            tasks,
            machineEvents,
            workOrderDetailsRepository,
            machineGroup
        };
    }


}
