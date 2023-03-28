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
        const machineGroup = await this.workCentersRepository.allWorkCenters();

        return {
            triggers,
            machineGroup
        };
    }


}
