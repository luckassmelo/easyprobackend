import { Task } from "../../domain/entities/task";

export interface ITasksRepository {
    findById(type: string, id: string, isClosed: boolean): Promise<Task | null>;
    getAll(): Promise<Task[] | null>;
    save(task: Task): Promise<Task | void>;
    closedTask(closed: any): Promise<any | void>;
    findTaskByIdOee(id: number, closed: boolean): Promise<any | void>;
}
