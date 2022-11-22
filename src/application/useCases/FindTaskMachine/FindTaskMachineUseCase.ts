import { ITasksRepository } from "../../repositories/ITasksRepository";

type FindTaskMachineRequest = {
    type: string,
    paramId: string;
}

export class FindTaskMachineUseCase {
    constructor(
        private tasksRepository: ITasksRepository
    ){}

    async execute({type, paramId}: FindTaskMachineRequest) {

        const task = await this.tasksRepository.findById(type, paramId);

        return task;
    }
}