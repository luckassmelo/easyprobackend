import { ITasksRepository } from "../../repositories/ITasksRepository";
import { BadRequestError } from "../../../../_src/infra/api/errors/bad-request.error";

type ClosedTaskRequest = {
    id: number,
    windowsuser: string,
    password?: string,
    description: string,
}


export class ClosedTaskUseCase {

    constructor(
        private closedRepository: ITasksRepository
    ) { }


    async execute({ windowsuser, description, id }: ClosedTaskRequest) {

        if (!windowsuser || !description || !id) throw new BadRequestError

        const closed = ({
            id,
            windowsuser,
            description,
        });


        const closedComplet = await this.closedRepository.closedTask(closed);


        return closedComplet

    }
}
