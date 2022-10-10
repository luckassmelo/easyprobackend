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
        .select("name", "status_value", "pieces_value", "status", "group_name", "machine", "id_user", "created_at", "id_trigger_type")
        .from("trigger.tbl_trigger")
        .leftJoin("target.tbl_group_target", "trigger.tbl_trigger.id_group", "tbl_group_target.id_group_target")
        .leftJoin("monitor.tbl_oee_monitor", "trigger.tbl_trigger.id_oee", "tbl_oee_monitor.id_oee")
        .where("id", id)   

        if(!triggerResult) return null;

        return new Trigger(
            {
                name: triggerResult[0].name,
                statusValue: triggerResult[0].status_value,
                piecesValue: triggerResult[0].pieces_value,
                status: triggerResult[0].status,
                groupId: triggerResult[0].group_name,
                oeeId: triggerResult[0].machine,
                userId: triggerResult[0].id_user,
                createdAt: triggerResult[0].created_at,
                triggerTypeId: triggerResult[0].id_trigger_type
            },
            id         
            
        );
    }
    
    async save(trigger: Trigger): Promise<any> {
         const triggerSaved = await this
                                    .adapter
                                    .connection
                                    .insert("trigger.tbl_trigger", {
                                        name:           trigger.props.name, 
                                        status_value:   trigger.props.statusValue,
                                        pieces_value:   trigger.props.piecesValue,
                                        status:         trigger.props.status,
                                        id_group:       trigger.props.groupId,
                                        id_oee:         trigger.props.oeeId,
                                        id_user:        trigger.props.userId,
                                        id_trigger_type: trigger.props.triggerTypeId
                                    });

       return triggerSaved;
    }

    async allTriggers(): Promise<Trigger[] > {
        return await this.adapter.connection
        .select("name", "status_value", "pieces_value", "status", "group_name", "machine", "id_user", "created_at", "id_trigger_type")
        .from("trigger.tbl_trigger")
        .leftJoin("target.tbl_group_target", "trigger.tbl_trigger.id_group", "tbl_group_target.id_group_target")
        .leftJoin("monitor.tbl_oee_monitor", "trigger.tbl_trigger.id_oee", "tbl_oee_monitor.id_oee")
    }
}