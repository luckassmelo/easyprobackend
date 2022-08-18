import { ITriggersRepository } from "../../application/repositories/ITriggersRepository";
import { Trigger } from "../../domain/entities/trigger";
import { prismaClient } from "../database/prismaClient";


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
                value: trigger.props.value,
                status: trigger.props.status,
                group: trigger.props.group,
                machine: trigger.props.machine, 
                id_user: trigger.props.userId,
            }
        });

        return triggerSaved;
    }

    async allTriggers(): Promise<Trigger | null> {
        return await prismaClient.trigger.findMany({
            include: {
                TriggerTask: true,
                TriggerCondOption: true,
                TriggerType: true
            }
        });
    }
    
}