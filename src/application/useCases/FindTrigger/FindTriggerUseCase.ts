import { ITriggersRepository } from "../../repositories/ITriggersRepository";

type FindTriggerRequest = {
    triggerId: number;
}

export class FindTriggerUseCase {
    constructor(
        private triggersRepository: ITriggersRepository
    ){}

    async execute({triggerId}: FindTriggerRequest) {

        const trigger = await this.triggersRepository.findById(triggerId);
        
        return trigger;
    }
}