import { Closed } from "../../../domain/entities/closed";
import { ITasksRepository } from "../../repositories/ITasksRepository";

type ClosedTaskRequest = {
    id: number,
    windowsUser: string,
    description: string
}


export class ClosedTaskUseCase {

    constructor(
        private closedRepository: ITasksRepository
    ) {}
        

    async execute ({windowsUser, description, id}: ClosedTaskRequest) {

        const closed = new Closed({
            id,
            windowsUser,
            description
        });

        const closedComplet = await this.closedRepository.closedTask(closed);
        

        return closedComplet
    
    }
}