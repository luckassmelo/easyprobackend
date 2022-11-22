import { ITasksRepository } from "../../repositories/ITasksRepository";

export class GetAllTaskUseCase {

    constructor(
        private tasksRepository: ITasksRepository
    ){}

    async execute() {
        return await this.tasksRepository.getAll();
    }

}