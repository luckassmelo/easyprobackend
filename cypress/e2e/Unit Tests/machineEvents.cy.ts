import { MachineEvent } from "../../../src/domain/entities/machineEvent";
import { InMemoryMachineEventsRepository } from "../../../src/test/repositories/InMemoryMachineEventsRepository";

describe("Machine events", () => {
  it("Should be return machine events", async () => {
    const machineEvent = new MachineEvent({
      eventDate: new Date(),
      eventName: "COUNTER_READING",
      machine: "A01",
      workorder: "6106636917",
      value: 708.0,
    });

    const machineEvent2 = new MachineEvent({
      eventDate: new Date(),
      eventName: "COUNTER_TESTE",
      machine: "T01",
      workorder: "6106636856",
      value: 10708.0,
    });

    const machineEventsRepository = new InMemoryMachineEventsRepository();
    machineEventsRepository.machineEvents.push(machineEvent, machineEvent2);
    const allEventsMachine = await machineEventsRepository.allMachineEvents();

    expect(allEventsMachine.length).to.be.equal(2);
  });
});
