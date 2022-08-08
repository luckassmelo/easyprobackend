import { Trigger } from "../../domain/entities/trigger";

export interface ITriggersRepository {
    findById(id: number): Promise<Trigger | null>;
    save(trigger: Trigger): Promise<Trigger | null>;
}