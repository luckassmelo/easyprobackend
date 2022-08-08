import { TriggerType } from "../../domain/entities/triggerType";

export interface ITriggerTypesRepository {
    findById(id: number): Promise<TriggerType | null>;
}