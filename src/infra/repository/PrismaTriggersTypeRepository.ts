import { prismaClient } from "../../../infra/database/prismaClient";
import { TriggerType } from "../../../domain/entities/triggerType";
import { ITriggerTypesRepository } from "../ITriggersTypesRepository";

export class PrismaTriggersType implements ITriggerTypesRepository {
    async findById(id: number): Promise<TriggerType | null> {
        const triggerTypeResult = await prismaClient.triggerType.findFirst({
            where: {
                id
            }
        });

        if(!triggerTypeResult)return null;

        return new TriggerType({
            description: triggerTypeResult.description,
            status: triggerTypeResult.status,
            unitOfMeasurement: triggerTypeResult.unitOfMeasurement,
            isAccumulated: triggerTypeResult.isAccumulated,
            triggerId: triggerTypeResult.id_trigger
        }, triggerTypeResult.id);
    }
}