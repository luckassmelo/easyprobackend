"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTriggersRepository = void 0;
const trigger_1 = require("../../domain/entities/trigger");
class PrismaTriggersRepository {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async findById(id) {
        const triggerResult = await this.adapter.connection
            .select("name", "pieces_value", "status_value", "status", "id_group", "monitor.id_oee", "id_user", "id_trigger_type", "is_productive_time")
            .from("trigger.tbl_trigger")
            .leftJoin("target.tbl_group_target", "trigger.tbl_trigger.id_group", "tbl_group_target.id_group_target")
            .leftJoin("monitor.tbl_oee_monitor as monitor", "trigger.tbl_trigger.id_oee", "monitor.id_oee")
            .where("id", id);
        if (!triggerResult)
            return null;
        return new trigger_1.Trigger({
            name: triggerResult[0].name,
            statusValue: triggerResult[0].status_value,
            piecesValue: triggerResult[0].pieces_value,
            status: triggerResult[0].status,
            groupId: triggerResult[0].id_group,
            oeeId: triggerResult[0].id_oee,
            userId: triggerResult[0].id_user,
            createdAt: triggerResult[0].created_at,
            triggerTypeId: triggerResult[0].id_trigger_type,
            isProductiveTime: triggerResult[0].is_productive_time
        }, id);
    }
    async save(trigger) {
        const triggerSaved = await this
            .adapter
            .connection("trigger.tbl_trigger").insert({
            name: trigger.props.name,
            pieces_value: trigger.props.piecesValue,
            status_value: trigger.props.statusValue,
            status: trigger.props.status,
            id_group: trigger.props.groupId,
            id_oee: trigger.props.oeeId,
            id_user: trigger.props.userId,
            id_trigger_type: trigger.props.triggerTypeId,
            is_productive_time: trigger.props.isProductiveTime
        });
        return triggerSaved;
    }
    async allTriggers() {
        return await this.adapter.connection
            .select(this.adapter.connection.raw(`
                        trigger.tbl_trigger.id,
                        trigger.tbl_trigger.name,
                        pieces_value, 
                        status_value,
                        grp_target.group_name,
                        grp_target.area,
                        TRIM(monitor.machine) as machine,
                        string_agg(ttriger_option.value::text, ',') AS entered_value, 
                        string_agg(ttriger_value.value::text, ',') AS conditional_values,
                        string_agg(ttriger_option.logical_operator, ',') AS logical_operators,
                        string_agg(DISTINCT concat_ws(' ', concat_ws('', ttriger_option.value, ttriger_value.value) , ttriger_option.logical_operator), ',') AS logical_expression,
                        string_agg(ttriger_cond.formated_name, ',') as conditional_types,
                        trigger.tbl_trigger.id_trigger_type,
                        ttriger_type."name" AS trigger_type,
                        is_productive_time,
                        trigger.tbl_trigger.status
                   `))
            .from("trigger.tbl_trigger")
            .leftJoin("target.tbl_group_target as grp_target", "trigger.tbl_trigger.id_group", "grp_target.id_group_target")
            .leftJoin("monitor.tbl_oee_monitor as monitor", "trigger.tbl_trigger.id_oee", "monitor.id_oee")
            .leftJoin("trigger.tbl_trigger_cond_option as ttriger_option", "trigger.tbl_trigger.id", "ttriger_option.id_trigger")
            .leftJoin("trigger.tbl_trigger_cond_value as ttriger_value", "ttriger_option.id_trigger_cond_value", "ttriger_value.id")
            .leftJoin("trigger.tbl_trigger_type as ttriger_type", "trigger.tbl_trigger.id_trigger_type", "ttriger_type.id")
            .leftJoin("trigger.tbl_trigger_cond as ttriger_cond", "ttriger_option.id_trigger_cond", "ttriger_cond.id")
            .where("trigger.tbl_trigger.status", true)
            .groupBy("trigger.tbl_trigger.id", "pieces_value", "status_value", "grp_target.group_name", "grp_target.area", "monitor.machine", "ttriger_type.name");
    }
}
exports.PrismaTriggersRepository = PrismaTriggersRepository;
//# sourceMappingURL=TriggersRepository.js.map