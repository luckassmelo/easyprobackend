import { Trigger } from "../../../domain/entities/trigger";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { ITriggerTypesRepository } from "../../repositories/ITriggersTypesRepository";

type CreateTriggerRequest = {
    description: string;
    triggerTypeId: number;
    value: number;
    status: boolean;
    group?: string | null;
    machine?: string | null;
    userId: number;
    createdAt?: Date | null;
}

export class CreateTriggerUseCase {
 
    constructor (
        private triggersRepository: ITriggersRepository,
        private triggersTypesRepository: ITriggerTypesRepository
    ){}

    async execute({ description, triggerTypeId, 
                    value,  status, group, 
                    machine, userId, createdAt}: CreateTriggerRequest) {

        const triggerType = await this.triggersTypesRepository.findById(triggerTypeId);
        if(!triggerType)throw new Error('Trigger type does not exists.');

        
        const trigger = new Trigger({
                description: description,
                triggerTypeId: triggerTypeId,
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