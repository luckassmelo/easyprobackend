import { FindTriggerUseCase } from "./FindTriggerUseCase";

export class FindTriggerController {
    constructor(
        private findTriggerUseCase: FindTriggerUseCase
    ){}

    async handle(params: any): Promise<any> {
        try {
            const triggerId: number = Number(params.triggerId);

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