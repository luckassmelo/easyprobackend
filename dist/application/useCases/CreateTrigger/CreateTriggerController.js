"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTriggerController = void 0;
class CreateTriggerController {
    constructor(createTriggerUseCase) {
        this.createTriggerUseCase = createTriggerUseCase;
    }
    async handle(body) {
        try {
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
        catch (error) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateTriggerController = CreateTriggerController;
//# sourceMappingURL=CreateTriggerController.js.map