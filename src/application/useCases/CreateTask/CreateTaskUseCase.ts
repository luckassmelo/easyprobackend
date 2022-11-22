import { Task } from "../../../domain/entities/task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";

type CreateTaskRequest = {
    userId?: number | null;
    triggerId: number;
    name: string;
    closed: boolean;
}

export class CreateTaskUseCase {

    constructor(
        private triggersRepository: ITriggersRepository,
        private tasksRepository: ITasksRepository
    ) {}

    async execute({ triggerId, name, closed }: CreateTaskRequest) {

        const trigger = await this.triggersRepository.findById(triggerId);
        if(!trigger)throw new Error('Trigger does not exists.');

        const task = new Task({
            triggerId,
            name,
            closed
        });

        const taskCreated = await this.tasksRepository.save(task);

        return taskCreated;
    }
}