"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTaskRepository = void 0;
class InMemoryTaskRepository {
    constructor() {
        this.tasks = [];
    }
    async findById(type, id) {
        var _a;
        const task = (_a = this.tasks.find((task) => task.id === id)) !== null && _a !== void 0 ? _a : null;
        return task;
    }
    async getAll() {
        const tasks = this.tasks;
        return tasks;
    }
    async save(task) {
        this.tasks.push(task);
    }
}
exports.InMemoryTaskRepository = InMemoryTaskRepository;
//# sourceMappingURL=InMemoryTaskRepository.js.map