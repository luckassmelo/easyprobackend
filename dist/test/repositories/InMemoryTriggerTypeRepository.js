"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTriggerTypeRepository = void 0;
class InMemoryTriggerTypeRepository {
    constructor() {
        this.triggerTypes = [];
    }
    async findById(id) {
        var _a;
        const triggerType = (_a = this.triggerTypes.find((triggerType) => triggerType.id === id)) !== null && _a !== void 0 ? _a : null;
        return triggerType;
    }
}
exports.InMemoryTriggerTypeRepository = InMemoryTriggerTypeRepository;
//# sourceMappingURL=InMemoryTriggerTypeRepository.js.map