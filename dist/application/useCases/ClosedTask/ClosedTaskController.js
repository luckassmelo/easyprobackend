"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosedTaskController = void 0;
class ClosedTaskController {
    constructor(closedTaskUseCase) {
        this.closedTaskUseCase = closedTaskUseCase;
    }
    async handle(body) {
        const { id, windowsUser, description, token } = body;
        try {
            const closeResponse = await this
                .closedTaskUseCase
                .execute({
                id,
                windowsUser,
                description,
                token
            });
            return (closeResponse);
        }
        catch (error) {
            return ({
                message: error.message || 'Unexpected error'
            });
        }
    }
}
exports.ClosedTaskController = ClosedTaskController;
//# sourceMappingURL=ClosedTaskController.js.map