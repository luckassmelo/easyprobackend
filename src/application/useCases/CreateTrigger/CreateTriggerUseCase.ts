import { TriggerRequest } from "../../../core/types/TriggerRequest";
import { Trigger } from "../../../domain/entities/trigger";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { ITriggerTypesRepository } from "../../repositories/ITriggersTypesRepository";

export class CreateTriggerUseCase {
 
    constructor (
        private triggersRepository: ITriggersRepository,
        private triggersTypesRepository: ITriggerTypesRepository
    ){}

    async execute(request: TriggerRequest) {

        const triggerType = await this.triggersTypesRepository.findById(request.triggerTypeId);

        if (!triggerType) throw new Error('Trigger type not found.');
        
        const trigger = new Trigger({
            name: request.name,
            groupId: request.groupId || null,
            oeeId: request.oeeId || null,
            piecesValue: request.piecesValue,
            status: request.status,
            statusValue: request.statusValue,
            triggerTypeId: request.triggerTypeId,
            userId: request.userId
        });        

        const triggerCreated = await this.triggersRepository.save(trigger);


        return triggerCreated;
    }
}