import { ITriggersRepository } from "../../application/repositories/ITriggersRepository";
import { Trigger } from "../../domain/entities/trigger";

export class InMemoryTriggersRepository implements ITriggersRepository {
  public triggers: Trigger[] = [];

  async findById(id: number): Promise<Trigger | null> {
    const trigger: Trigger | null =
      this.triggers.find((trigger) => trigger.id === id) ?? null;

    return trigger;
  }

  async allTriggers(): Promise<Trigger[]> {
    const triggers: Trigger[] = this.triggers;

    return triggers;
  }

  async save(trigger: Trigger): Promise<any> {
    this.triggers.push(trigger);
  }
}
