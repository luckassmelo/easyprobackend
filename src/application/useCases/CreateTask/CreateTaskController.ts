import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(body: any): Promise<any> {
        const { triggerId, name, closed, idOee, idSite } = body;
        const taskResponse = await this
                                        .createTaskUseCase
                                        .execute({
                                            triggerId,
                                            name,
                                            closed,
                                            idOee,
                                            idSite
                                        });

        return (taskResponse);
    }
}