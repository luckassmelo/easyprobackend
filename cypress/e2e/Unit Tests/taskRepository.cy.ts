import { Task } from "../../../src/domain/entities/task";
import { InMemoryTaskRepository } from "../../../src/test/repositories/InMemoryTaskRepository";

describe("Task Repository", () => {
  const task = new Task({
    userId: 10,
    triggerId: 2,
    name: "Produced Pieces Task",
    closed: false,
    createdAt: new Date(),
  });

  const task2 = new Task({
    userId: 11,
    triggerId: 2,
    name: "Produced Pieces Task",
    closed: true,
    createdAt: new Date(),
  });

  const taskRepository = new InMemoryTaskRepository();
  taskRepository.tasks.push(task, task2);

  it("Find 2 Id", async () => {
    const searchedTask = await taskRepository.findById(task.id);

    expect(searchedTask).to.be.equal(task);
    expect(taskRepository.tasks.length).to.be.equal(2);
  });

  it("Find all task", async () => {
    const allTask = await taskRepository.getAll();

    expect(allTask?.length).to.be.equal(2);
  });

  it("Create new task", () => {
    const Createdtask = new Task({
      userId: 15,
      triggerId: 1,
      name: "Creating Task",
      closed: false,
      createdAt: new Date(),
    });
    const taskRepository = new InMemoryTaskRepository();
    taskRepository.save(Createdtask);

    expect(taskRepository).to.be.instanceOf(Object);
  });
});
