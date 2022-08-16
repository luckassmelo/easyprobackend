import { TriggerRequest } from "../../../core/types/TriggerRequest";
import { Trigger } from "../../../domain/entities/trigger";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { ITriggerTypesRepository } from "../../repositories/ITriggersTypesRepository";

export class CreateTriggerUseCase {
 
    constructor (
        private triggersRepository: ITriggersRepository,
        private triggersTypesRepository: ITriggerTypesRepository
    ){}

    async execute({ description, value,  status, group, 
                    machine, userId, createdAt}: TriggerRequest) {

        
        const trigger = new Trigger({
                description: description,
                value: value,
                status: status,
                group: group,
                machine: machine,
                userId: userId
        });        

        const triggerCreated = await this.triggersRepository.save(trigger);


        return triggerCreated;
    }
}