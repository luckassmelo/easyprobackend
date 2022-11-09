import { MachineEvent } from "../../../domain/entities/machineEvent";
import { Trigger } from "../../../domain/entities/trigger";
import { IMachineEventsRepository } from "../../repositories/IMachineEventsRepository";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { IWorkOrderDetailsRepository } from "../../repositories/IWorkOrderDetailsRepository";


export class GetAllServiceInformationUseCase {
    constructor(
        private triggersRepository: ITriggersRepository,
        private tasksRepository: ITasksRepository,
        private machineEventsRepository: IMachineEventsRepository,
        private workOrderDetailsRepository: IWorkOrderDetailsRepository
    ){}

    async execute() {

        const triggers = ((await this.triggersRepository.allTriggers()));
        const tasks = await this.tasksRepository.getAll();
        const machineEvents = (await this.machineEventsRepository.allMachineEvents());
        const workOrders : Array<string> = []; 
        
        for(const event of machineEvents) {
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