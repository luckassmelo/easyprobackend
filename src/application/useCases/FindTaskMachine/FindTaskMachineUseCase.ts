import { NotFoundError } from "../../../../_src/infra/api/errors/not-found.error";
import { ITasksRepository } from "../../repositories/ITasksRepository";

type FindTaskMachineRequest = {
    type: string,
    paramId: string;
    isClosed: boolean;
}

export class FindTaskMachineUseCase {
    constructor(
        private tasksRepository: ITasksRepository
    ) { }

    async execute({ type, paramId, isClosed }: FindTaskMachineRequest) {

        const task = await this.tasksRepository.findById(type, paramId, isClosed);

        if (!task[0]) throw new NotFoundError;

        return task;
    }
}
