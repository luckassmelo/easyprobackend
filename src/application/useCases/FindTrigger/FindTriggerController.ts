import { FindTriggerUseCase } from "./FindTriggerUseCase";
import { NotFoundError } from "../../../../_src/infra/api/errors/not-found-error";
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
            throw new NotFoundError
        }

    }
}