import { ITasksRepository } from "../../application/repositories/ITasksRepository";
import { Task } from "../../domain/entities/task";
import Connection from "../database/Connection";


export class PrismaTasksRepository implements ITasksRepository {
    constructor(
        readonly connection: Connection
    ){}

    async save(task: Task): Promise<void | Task> {
        const taskResult = await this.connection
                                     .insert('tbl_trigger_task', {
                                        id_trigger: task.props.triggerId, 
                                        description: task.props.description, 
                                        closed: task.props.closed
                                     });
        
        return taskResult;
    }

    async findById(id: number): Promise<Task | null> {
        return null;
    }

    async getAll(): Promise<Task[] | null> {
        return null;
    }
}