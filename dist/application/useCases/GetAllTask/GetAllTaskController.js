"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTaskController = void 0;
class GetAllTaskController {
    constructor(getAllTaskUseCase) {
        this.getAllTaskUseCase = getAllTaskUseCase;
    }
    async handle() {
        try {
            return await this.getAllTaskUseCase.execute();
        }
        catch (err) {
            return ({
                message: err.message || "Unexpected error."
            });
        }
    }
}
exports.GetAllTaskController = GetAllTaskController;
//# sourceMappingURL=GetAllTaskController.js.map