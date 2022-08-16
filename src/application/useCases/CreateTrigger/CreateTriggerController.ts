import { CreateTriggerUseCase } from "./CreateTriggerUseCase";

export class CreateTriggerController {
    constructor(
        private createTriggerUseCase: CreateTriggerUseCase
    ){}

    async handle(body: any): Promise<any> {
        try {
            const { description, value, status, group, machine, userId } = body;
            
            const triggerResponse = await this
                                              .createTriggerUseCase
                                              .execute({ description,
                                                        value,
                                                        status,
                                                        group,
                                                        machine,
                                                        userId
                                                });

            return (triggerResponse);

        } catch (error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}