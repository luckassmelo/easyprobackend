import { ITriggerTypesRepository } from "../../application/repositories/ITriggersTypesRepository";
import { TriggerType } from "../../domain/entities/triggerType";

export class InMemoryTriggerTypeRepository implements ITriggerTypesRepository {
  public triggerTypes: TriggerType[] = [];

  async findById(id: number): Promise<TriggerType | null> {
    const triggerType: TriggerType | null =
      this.triggerTypes.find((triggerType) => triggerType.id === id) ?? null;

    return triggerType;
  }
}
