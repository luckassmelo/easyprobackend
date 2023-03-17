import { ITasksRepository } from "../../repositories/ITasksRepository";

type ClosedTaskRequest = {
    id: number,
    windowsuser: string,
    password?: string,
    description: string,
}


export class ClosedTaskUseCase {

    constructor(
        private closedRepository: ITasksRepository
    ) {}
        

    async execute ({windowsuser, description, id}: ClosedTaskRequest) {    
        const closed = ({
            id,
            windowsuser,
            description,
        });
         
        
        const closedComplet = await this.closedRepository.closedTask(closed);
        

        return closedComplet
    
    }
}