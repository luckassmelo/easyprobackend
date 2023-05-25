import { ClosedTaskUseCase } from "./ClosedTaskUseCase";

export class ClosedTaskController {
    constructor(
        private closedTaskUseCase: ClosedTaskUseCase
    ) {}

    async handle(body: any): Promise<any> {
        const { id, windowsuser, description} = body;      
        const closeResponse = await this
                                        .closedTaskUseCase
                                        .execute({
                                            id,
                                            windowsuser,
                                            description
                                        });
        return (closeResponse);
    }
}