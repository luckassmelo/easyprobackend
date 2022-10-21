import { TriggerType } from "../../../src/domain/entities/triggerType";
import { InMemoryTriggerTypeRepository } from "../../../src/test/repositories/InMemoryTriggerTypeRepository";

describe("Trigger type", () => {
  const triggerType = new TriggerType({
    name: "Machine Status",
    status: true,
    isProductiveTime: false,
  });

  const triggerType2 = new TriggerType({
    name: "Machine Status Teste",
    status: false,
    isProductiveTime: true,
  });

  const triggerTypeRepository = new InMemoryTriggerTypeRepository();
  triggerTypeRepository.triggerTypes.push(triggerType, triggerType2);

  it("Find type trigger by id", async () => {
    const searchedTriggerType = await triggerTypeRepository.findById(
      triggerType.id
    );

    expect(searchedTriggerType).to.be.equal(triggerType);
    expect(triggerTypeRepository.triggerTypes.length).to.be.equal(2);
  });
});
