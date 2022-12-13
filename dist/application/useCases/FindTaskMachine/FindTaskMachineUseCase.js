"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTaskMachineUseCase = void 0;
class FindTaskMachineUseCase {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute({ type, paramId }) {
        const task = await this.tasksRepository.findById(type, paramId);
        return task;
    }
}
exports.FindTaskMachineUseCase = FindTaskMachineUseCase;
//# sourceMappingURL=FindTaskMachineUseCase.js.map