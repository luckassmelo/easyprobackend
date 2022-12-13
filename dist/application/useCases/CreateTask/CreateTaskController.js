"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
class CreateTaskController {
    constructor(createTaskUseCase) {
        this.createTaskUseCase = createTaskUseCase;
    }
    async handle(body) {
        const { triggerId, name, closed } = body;
        try {
            const taskResponse = await this
                .createTaskUseCase
                .execute({
                triggerId,
                name,
                closed
            });
            return (taskResponse);
        }
        catch (error) {
            return ({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateTaskController = CreateTaskController;
//# sourceMappingURL=CreateTaskController.js.map