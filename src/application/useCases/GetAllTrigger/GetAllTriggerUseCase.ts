import { ITriggersRepository } from "../../repositories/ITriggersRepository";

export class GetAllTriggerUseCase {

    constructor(
        private triggersRepository: ITriggersRepository
    ){}

    async execute() {
        return await this.triggersRepository.allTriggers();
    }
}