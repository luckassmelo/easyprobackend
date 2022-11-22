import { Trigger } from "../../../src/domain/entities/trigger";
import { InMemoryTriggersRepository } from "../../../src/test/repositories/InMemoryTriggersRepository";

describe("Trigger Repository", () => {
  const trigger = new Trigger({
    name: "TRG_MACHINE_STATUS",
    piecesValue: null,
    statusValue: "S20800",
    status: true,
    oeeId: 4400,
    groupId: null,
    userId: 1264,
    triggerTypeId: 3,
    isProductiveTime: false,
    createdAt: new Date(),
  });

  const trigger2 = new Trigger({
    name: "TRG_PRODUCED_PIECES",
    piecesValue: 20000,
    statusValue: null,
    status: true,
    oeeId: null,
    groupId: 1,
    userId: 1264,
    triggerTypeId: 1,
    isProductiveTime: false,
    createdAt: new Date(),
  });

  const triggerRepository = new InMemoryTriggersRepository();
  triggerRepository.triggers.push(trigger, trigger2);

  it("Find 2 Id", async () => {
    const searchedTrigger = await triggerRepository.findById(trigger.id);

    expect(searchedTrigger).to.be.equal(trigger);
    expect(triggerRepository.triggers.length).to.be.equal(2);
  });

  it("Find all task", async () => {
    const allTriggers = await triggerRepository.allTriggers();

    expect(allTriggers?.length).to.be.equal(2);
  });

  it("Create new trigger", () => {
    const Createdtrigger = new Trigger({
      name: "TRG_PIECES_VALUE_2",
      piecesValue: 21215,
      statusValue: null,
      status: true,
      oeeId: 4395,
      groupId: null,
      userId: 1410,
      triggerTypeId: 1,
      isProductiveTime: false,
      createdAt: new Date(),
    });
    const triggerRepository = new InMemoryTriggersRepository();
    triggerRepository.save(Createdtrigger);

    expect(triggerRepository).to.be.instanceOf(Object);
  });
});
