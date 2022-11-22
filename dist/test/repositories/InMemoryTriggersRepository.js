"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTriggersRepository = void 0;
class InMemoryTriggersRepository {
    constructor() {
        this.triggers = [];
    }
    async findById(id) {
        var _a;
        const trigger = (_a = this.triggers.find((trigger) => trigger.id === id)) !== null && _a !== void 0 ? _a : null;
        return trigger;
    }
    async allTriggers() {
        const triggers = this.triggers;
        return triggers;
    }
    async save(trigger) {
        this.triggers.push(trigger);
    }
}
exports.InMemoryTriggersRepository = InMemoryTriggersRepository;
//# sourceMappingURL=InMemoryTriggersRepository.js.map