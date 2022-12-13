"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTriggerUseCase = void 0;
class FindTriggerUseCase {
    constructor(triggersRepository) {
        this.triggersRepository = triggersRepository;
    }
    async execute({ triggerId }) {
        const trigger = await this.triggersRepository.findById(triggerId);
        return trigger;
    }
}
exports.FindTriggerUseCase = FindTriggerUseCase;
//# sourceMappingURL=FindTriggerUseCase.js.map