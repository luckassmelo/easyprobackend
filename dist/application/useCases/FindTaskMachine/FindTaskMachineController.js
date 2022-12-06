"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTaskMachineController = void 0;
class FindTaskMachineController {
    constructor(findTaskMachineUseCase) {
        this.findTaskMachineUseCase = findTaskMachineUseCase;
    }
    async handle(body) {
        try {
            const type = String(body.type);
            const paramId = String(body.paramId);
            const isClosed = body.isClosed === "true" ? true : false;
            const taskResponse = await this
                .findTaskMachineUseCase
                .execute({ type, paramId, isClosed });
            return (taskResponse);
        }
        catch (error) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.FindTaskMachineController = FindTaskMachineController;
//# sourceMappingURL=FindTaskMachineController.js.map