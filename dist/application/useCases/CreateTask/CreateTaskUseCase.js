"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
const task_1 = require("../../../domain/entities/task");
class CreateTaskUseCase {
    constructor(triggersRepository, tasksRepository) {
        this.triggersRepository = triggersRepository;
        this.tasksRepository = tasksRepository;
    }
    async execute({ triggerId, name, closed }) {
        const trigger = await this.triggersRepository.findById(triggerId);
        if (!trigger)
            throw new Error('Trigger does not exists.');
        const task = new task_1.Task({
            triggerId,
            name,
            closed
        });
        const taskCreated = await this.tasksRepository.save(task);
        return taskCreated;
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
//# sourceMappingURL=CreateTaskUseCase.js.map