"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTaskUseCase = void 0;
class GetAllTaskUseCase {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async execute() {
        return await this.tasksRepository.getAll();
    }
}
exports.GetAllTaskUseCase = GetAllTaskUseCase;
//# sourceMappingURL=GetAllTaskUseCase.js.map