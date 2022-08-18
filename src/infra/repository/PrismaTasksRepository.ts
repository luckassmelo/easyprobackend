import { ITasksRepository } from "../../application/repositories/ITasksRepository";
import { Task } from "../../domain/entities/task";
import { prismaClient } from "../database/prismaClient";


export class PrismaTasksRepository implements ITasksRepository {
    async save(task: Task): Promise<Task | void> {
        const taskResult = await prismaClient.triggerTask.create({
            data: {
                id_trigger: task.props.triggerId,
                description: task.props.description,
                closed: task.props.closed
            }
        });

        return new Task({
            description: taskResult.description,
            triggerId: taskResult.id_trigger,
            closed: taskResult.closed
        }, taskResult.id);
    }

    async findById(id: number): Promise<Task | null> {
        return null;
    }

    async getAll(): Promise<Task[] | null> {
        return null;
    }
}