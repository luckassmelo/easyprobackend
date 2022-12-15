import { ClosedTaskUseCase } from "./ClosedTaskUseCase";

export class ClosedTaskController {
    constructor(
        private closedTaskUseCase: ClosedTaskUseCase
    ) {}

    async handle(body: any): Promise<any> {
        const { id, windowsUser, description} = body;      

        try {
            const closeResponse = await this
                                            .closedTaskUseCase
                                            .execute({
                                                id,
                                                windowsUser,
                                                description
                                            });
            return (closeResponse);
        } catch (error: any) {
            return ({
                message:error.message || 'Unexpected error'
            })
        }
    }
}