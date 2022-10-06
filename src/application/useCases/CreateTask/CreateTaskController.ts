import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(body: any): Promise<any> {
        const { triggerId, name, closed } = body;

        try {
            const taskResponse = await this
                                            .createTaskUseCase
                                            .execute({
                                                triggerId,
                                                name,
                                                closed
                                            });

            return (taskResponse);
        } catch(error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}