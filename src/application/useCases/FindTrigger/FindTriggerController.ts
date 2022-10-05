import { FindTriggerUseCase } from "./FindTriggerUseCase";

export class FindTriggerController {
    constructor(
        private findTriggerUseCase: FindTriggerUseCase
    ){}

    async handle(body: any): Promise<any> {
        try {
            const triggerId: number = Number(body.triggerId);

            const triggerResponse = await this
                                              .findTriggerUseCase
                                              .execute({triggerId});

            return (triggerResponse);
        } catch (error: any) {
            return ({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}