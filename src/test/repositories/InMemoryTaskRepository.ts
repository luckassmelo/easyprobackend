import { ITasksRepository } from "../../application/repositories/ITasksRepository";
import { Task } from "../../domain/entities/task";

export class InMemoryTaskRepository implements ITasksRepository {
  public tasks: Task[] = [];

  async findById(id: number): Promise<Task | null> {
    const task: Task | null = this.tasks.find((task) => task.id === id) ?? null;

    return task;
  }

  async getAll(): Promise<Task[] | null> {
    const tasks: Task[] = this.tasks;

    return tasks;
  }

  async save(task: Task): Promise<void | Task> {
    this.tasks.push(task);
  }
}