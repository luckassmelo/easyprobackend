import { Task } from "../../domain/entities/task";

export interface ITasksRepository {
    findById(type: string, id: string): Promise<Task | null>;
    getAll(): Promise<Task[] | null>;
    save(task: Task): Promise<Task | void>;
    closedTask(closed: any): Promise<any | void>;
}