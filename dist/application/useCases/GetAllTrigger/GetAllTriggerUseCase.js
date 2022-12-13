"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTriggerUseCase = void 0;
class GetAllTriggerUseCase {
    constructor(triggersRepository) {
        this.triggersRepository = triggersRepository;
    }
    async execute() {
        return await this.triggersRepository.allTriggers();
    }
}
exports.GetAllTriggerUseCase = GetAllTriggerUseCase;
//# sourceMappingURL=GetAllTriggerUseCase.js.map