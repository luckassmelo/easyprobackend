import { Task } from "../../domain/entities/task";

export interface ITasksRepository {
    findById(id: number): Promise<Task | null>;
    getAll(): Promise<Task[] | null>;
    save(task: Task): Promise<Task | void>;
}