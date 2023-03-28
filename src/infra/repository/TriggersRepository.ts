import { ITriggersRepository } from "../../application/repositories/ITriggersRepository";
import { Trigger } from "../../domain/entities/trigger";
import Connection from "../database/Connection";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";


export class PrismaTriggersRepository implements ITriggersRepository  {

    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async findById(id: number): Promise<Trigger | null> {
        const triggerResult = await this.adapter.connection
        .select("name", "pieces_value", "status_value", "status", "id_group", "monitor.id_oee", "id_user", "id_trigger_type", "is_productive_time")
        .from("trigger.tbl_trigger")
        .leftJoin("target.tbl_group_target", "trigger.tbl_trigger.id_group", "tbl_group_target.id_group_target")
        .leftJoin("monitor.tbl_oee_monitor as monitor", "trigger.tbl_trigger.id_oee", "monitor.id_oee")
        .where("id", id)

        if(!triggerResult) return null;

        return new Trigger(
            {
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
            },
            id

        );
    }

    async save(trigger: Trigger): Promise<any> {
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

    async allTriggers(): Promise<Trigger[]> {
        return await this.adapter.connection
                .select(
                   this.adapter.connection.raw(`
                        trigger.tbl_trigger.id,
                        trigger.tbl_trigger.name,
                        trigger.tbl_trigger.id_site,
                        pieces_value,
                        status_value,
                        grp_target.group_name,
                        monitor.area,
                        TRIM(monitor.machine) as machine,
                        array_agg(json_build_object(
							'conditional_type', ttriger_cond.formated_name,
							'selected_conditional_value', ttriger_value.value,
							'entered_conditional_value', ttriger_option.value,
							'logical_operator', ttriger_option.logical_operator
						) ) as conditionals,
                        trigger.tbl_trigger.id_trigger_type,
                        ttriger_type."name" AS trigger_type,
                        is_productive_time,
                        trigger.tbl_trigger.status,
                        trigger.tbl_trigger.created_at,
                        trigger.tbl_trigger.modified_at
                   `)
                )
                .from("trigger.tbl_trigger")
                .leftJoin("target.tbl_group_target as grp_target" , "trigger.tbl_trigger.id_group", "grp_target.id_group_target")
                .leftJoin("monitor.tbl_oee_monitor as monitor", "trigger.tbl_trigger.id_oee", "monitor.id_oee")
                .leftJoin("trigger.tbl_trigger_cond_option as ttriger_option", "trigger.tbl_trigger.id", "ttriger_option.id_trigger")
                .leftJoin("trigger.tbl_trigger_cond_value as ttriger_value", "ttriger_option.id_trigger_cond_value", "ttriger_value.id")
                .leftJoin("trigger.tbl_trigger_type as ttriger_type", "trigger.tbl_trigger.id_trigger_type", "ttriger_type.id")
                .leftJoin("trigger.tbl_trigger_cond as ttriger_cond", "ttriger_option.id_trigger_cond", "ttriger_cond.id")
                .where("trigger.tbl_trigger.status", true)
                // .whereIn("trigger.tbl_trigger.id", [110])
                // .whereIn("trigger.tbl_trigger.id", [108])
                .groupBy("trigger.tbl_trigger.id", "pieces_value", "status_value", "grp_target.group_name", "monitor.area", "monitor.machine", "ttriger_type.name");

    }
}
