import { Task } from "../../../domain/entities/task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ITriggersRepository } from "../../repositories/ITriggersRepository";
import { NotFoundError } from "../../../../_src/infra/api/errors/not-found.error";

type CreateTaskRequest = {
    userId?: number | null;
    triggerId: number;
    name: string;
    description: string;
    closed: boolean;
    idOee: number;
    idSite: number;
}

export class CreateTaskUseCase {

    constructor(
        private triggersRepository: ITriggersRepository,
        private tasksRepository: ITasksRepository
    ) { }

    async execute({ triggerId, name, description, closed, idOee, idSite, }: CreateTaskRequest) {

        const trigger = await this.triggersRepository.findById(triggerId);
        if (!trigger) throw new NotFoundError('Trigger does not exists.');

        const task = new Task({
            triggerId,
            name,
            description,
            closed,
            idOee,
            idSite
        });

        const taskCreated = await this.tasksRepository.save(task);

        return taskCreated;
    }
}
