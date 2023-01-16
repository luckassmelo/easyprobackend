import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(body: any): Promise<any> {
        const { triggerId, name, closed, idOee } = body;

        try {
            const taskResponse = await this
                                            .createTaskUseCase
                                            .execute({
                                                triggerId,
                                                name,
                                                closed,
                                                idOee
                                            });

            return (taskResponse);
        } catch(error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}