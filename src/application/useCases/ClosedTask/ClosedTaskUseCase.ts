import { Closed } from "../../../domain/entities/closed";
import { IClosedRepository } from "../../repositories/IClosedRepository";

type ClosedTaskRequest = {
    id: number,
    windowsUser: string,
    description: string
}


export class ClosedTaskUseCase {

    constructor(
        private closedRepository: IClosedRepository
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