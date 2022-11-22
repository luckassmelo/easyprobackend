import { Trigger } from "../../domain/entities/trigger";

export interface ITriggersRepository {
    findById(id: number): Promise<Trigger | null>;
    allTriggers(): Promise<Trigger[]>;
    save(trigger: Trigger): Promise<any>;
}