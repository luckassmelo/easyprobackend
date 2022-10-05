import { Task } from "../../../domain/entities/task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
        // private usersRepository: IUsersRepository,
    ) {}

    async execute({ triggerId, name, closed }: CreateTaskRequest) {
        // const user = await this.usersRepository.findById(userId);
        // if(!user)throw new Error('User does not exists.');

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