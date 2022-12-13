"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTriggerController = void 0;
class GetAllTriggerController {
    constructor(getAllTriggerUseCase) {
        this.getAllTriggerUseCase = getAllTriggerUseCase;
    }
    async handle() {
        try {
            return await this.getAllTriggerUseCase.execute();
        }
        catch (error) {
            return ({
                message: error.message || "Unexpected error."
            });
        }
    }
}
exports.GetAllTriggerController = GetAllTriggerController;
//# sourceMappingURL=GetAllTriggerController.js.map