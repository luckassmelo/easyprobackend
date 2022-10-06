import { ITriggersRepository } from "../../application/repositories/ITriggersRepository";
import { Trigger } from "../../domain/entities/trigger";
import Connection from "../database/Connection";


export class PrismaTriggersRepository implements ITriggersRepository  {

    constructor(
        readonly connection: Connection
    ){}

    async findById(id: number): Promise<Trigger | null> {
        const triggerResult = await this.connection.query("SELECT * FROM trigger.tbl_trigger WHERE id = ?", [id]);

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
                triggerTypeId: triggerResult.rows[0].id_trigger_type,
                isProductiveTime: triggerResult.rows[0].is_productive_time
            },
            id         
        );
    }
    
    async save(trigger: Trigger): Promise<any> {
         const triggerSaved = await this
                                    .connection
                                    .insert("trigger.tbl_trigger", {
                                        name:           trigger.props.name, 
                                        status_value:   trigger.props.statusValue,
                                        pieces_value:   trigger.props.piecesValue,
                                        status:         trigger.props.status,
                                        id_group:       trigger.props.groupId,
                                        id_oee:         trigger.props.oeeId,
                                        id_user:        trigger.props.userId,
                                        id_trigger_type: trigger.props.triggerTypeId,
                                        is_productive_time: trigger.props.isProductiveTime
                                    });

       return triggerSaved;
    }

    async allTriggers(): Promise<Trigger[] > {
        return (await this.connection.query("SELECT * FROM trigger.tbl_trigger", [])).rows;
    }
}