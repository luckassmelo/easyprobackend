import { Closed } from "../../../domain/entities/closed";
import { ITasksRepository } from "../../repositories/ITasksRepository";

type ClosedTaskRequest = {
    id: number,
    windowsUser: string,
    description: string,
    token: string
}


export class ClosedTaskUseCase {

    constructor(
        private closedRepository: ITasksRepository
    ) {}
        

    async execute ({windowsUser, description, id, token}: ClosedTaskRequest) {

        const closed = new Closed({
            id,
            windowsUser,
            description,
            token
        });

        const closedComplet = await this.closedRepository.closedTask(closed);
        

        return closedComplet
    
    }
}