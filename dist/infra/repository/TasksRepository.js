"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTasksRepository = void 0;
class PrismaTasksRepository {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async save(task) {
        const taskResult = await this.adapter.connection("trigger.tbl_trigger_task")
            .insert({
            id_trigger: task.props.triggerId,
            name: task.props.name,
            closed: task.props.closed
        });
        return taskResult;
    }
    async findById(type, id, isClosed) {
        if (type !== "wc" && type !== "group")
            return null;
        const arrayId = id.split(',');
        const arrayInt = arrayId.map(function (x) {
            return parseInt(x);
        });
        if (type === "group") {
            //group
            return await this.adapter.connection
                .select("trigger.tbl_trigger_task.id", "id_trigger", "trigger.tbl_trigger_task.name", "trigger.tbl_trigger_task.id_user", "closed", "trigger.tbl_trigger_task.created_at", "id_group", "group_name", "area", "description_trigger")
                .from("trigger.tbl_trigger_task ")
                .innerJoin("trigger.tbl_trigger", "id_trigger", "trigger.tbl_trigger.id")
                .leftJoin("target.tbl_group_target", "trigger.tbl_trigger.id_group", "target.tbl_group_target.id_group_target")
                .whereIn("target.tbl_group_target.id_group_target", arrayInt)
                .where("trigger.tbl_trigger_task.closed", isClosed);
        }
        //wc
        return await this.adapter.connection
            .select("trigger.tbl_trigger_task.id", "id_trigger", "trigger.tbl_trigger_task.name", "trigger.tbl_trigger_task.id_user", "closed", "trigger.tbl_trigger_task.created_at", "trigger.tbl_trigger.id_oee", "machine", "description_trigger")
            .from("trigger.tbl_trigger_task ")
            .innerJoin("trigger.tbl_trigger", "id_trigger", "trigger.tbl_trigger.id")
            .leftJoin("monitor.tbl_oee_monitor", "trigger.tbl_trigger.id_oee", "monitor.tbl_oee_monitor.id_oee")
            .whereIn("trigger.tbl_trigger.id_oee", arrayInt)
            .where("trigger.tbl_trigger_task.closed", isClosed);
    }
    async getAll() {
        return await this.adapter.connection
            .select("*")
            .from("trigger.tbl_trigger_task")
            .innerJoin("trigger.tbl_trigger", "id_trigger", "trigger.tbl_trigger.id")
            .where("trigger.tbl_trigger_task.closed", false);
    }
}
exports.PrismaTasksRepository = PrismaTasksRepository;
//# sourceMappingURL=TasksRepository.js.map