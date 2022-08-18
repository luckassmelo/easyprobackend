import { IMachineEventsRepository } from "../../repositories/IMachineEventsRepository";

export class GetAllMachineEventUseCase {
    
    constructor(
        private machineEventsRepository: IMachineEventsRepository
    ){}

    async execute() {
        return await this.machineEventsRepository.allMachineEvents();
    }
}