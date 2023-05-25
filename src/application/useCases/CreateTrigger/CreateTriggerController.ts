import { CreateTriggerUseCase } from "./CreateTriggerUseCase";

export class CreateTriggerController {
    constructor(
        private createTriggerUseCase: CreateTriggerUseCase
    ){}

    async handle(body: any): Promise<any> {
        const { name, statusValue, piecesValue, status, groupId, oeeId, userId, triggerTypeId, isProductiveTime } = body;
            
        const triggerResponse = await this
                                        .createTriggerUseCase
                                        .execute({ name,
                                            statusValue,
                                            piecesValue,
                                            status,
                                            groupId,
                                            oeeId,
                                            userId,
                                            triggerTypeId,
                                            isProductiveTime
                                        });

            return (triggerResponse);
    }
}