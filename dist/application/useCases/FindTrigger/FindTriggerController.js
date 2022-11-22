"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTriggerController = void 0;
class FindTriggerController {
    constructor(findTriggerUseCase) {
        this.findTriggerUseCase = findTriggerUseCase;
    }
    async handle(body) {
        try {
            const triggerId = Number(body.triggerId);
            const triggerResponse = await this
                .findTriggerUseCase
                .execute({ triggerId });
            return (triggerResponse);
        }
        catch (error) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.FindTriggerController = FindTriggerController;
//# sourceMappingURL=FindTriggerController.js.map