import { prismaClient } from "../../../database/prismaClient";
import { Trigger } from "../../../domain/entities/trigger";
import { ITriggersRepository } from "../ITriggersRepository";

export class PrismaTriggersRepository implements ITriggersRepository  {

    async findById(id: number): Promise<Trigger | null> {
        const triggerResult = await prismaClient.trigger.findFirst({
            where: {
                id
            }
        });

        if(!triggerResult)return null;
        
        return new Trigger(
            {
                description: triggerResult.description,
                triggerTypeId: triggerResult.id_trigger_type,
                value: triggerResult.value,
                status: triggerResult.status,
                group: triggerResult.group,
                machine: triggerResult.machine,
                userId: triggerResult.id_user,
                createdAt: triggerResult.createdAt
            },
            triggerResult.id
        );
    }
    
    
    async save(trigger: Trigger): Promise<Trigger | null> {
         const triggerSaved = await prismaClient.trigger.create({
            data: {
                description: trigger.props.description,
                id_trigger_type: trigger.props.triggerTypeId,
                value: trigger.props.value,
                status: trigger.props.status,
                group: trigger.props.group,
                machine: trigger.props.machine, 
                id_user: trigger.props.userId,
            }
        });

        return triggerSaved;
    }
}