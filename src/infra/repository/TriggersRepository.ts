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
        .select("*")
        .from("trigger.tbl_trigger")
        .where("id", id)       

        if(!triggerResult) return null;

        return new Trigger(
            {
                name: triggerResult.rows[0].name,
                statusValue: triggerResult.rows[0].status_value,
                piecesValue: triggerResult.rows[0].pieces_value,
                status: triggerResult.rows[0].status,
                groupId: triggerResult.rows[0].id_group,
                oeeId: triggerResult.rows[0].id_oee,
                userId: triggerResult.rows[0].id_user,
                createdAt: triggerResult.rows[0].created_at,
                triggerTypeId: triggerResult.rows[0].id_trigger_type
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
        .select("*")
        .from("trigger.tbl_trigger");
    }
}