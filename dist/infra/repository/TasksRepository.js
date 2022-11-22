"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTasksRepository = void 0;
class PrismaTasksRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async save(task) {
        const taskResult = await this.connection
            .insert('trigger.tbl_trigger_task', {
            id_trigger: task.props.triggerId,
            name: task.props.name,
            closed: task.props.closed
        });
        return taskResult;
    }
    async findById(id) {
        return null;
    }
    async getAll() {
        return null;
    }
}
exports.PrismaTasksRepository = PrismaTasksRepository;
//# sourceMappingURL=TasksRepository.js.map