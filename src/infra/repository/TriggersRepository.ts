import { ITriggersRepository } from "../../application/repositories/ITriggersRepository";
import { Trigger } from "../../domain/entities/trigger";
import Connection from "../database/Connection";


export class PrismaTriggersRepository implements ITriggersRepository  {

    constructor(
        readonly connection: Connection
    ){}

    async findById(id: number): Promise<Trigger | null> {
        const triggerResult = await this.connection.query("SELECT * FROM tbl_trigger WHERE id = ?", [id]);

        if(!triggerResult) return null;

        return new Trigger(
            {
                description: triggerResult.rows[0].description,
                value: triggerResult.rows[0].value,
                status: triggerResult.rows[0].status,
                group: triggerResult.rows[0].group,
                machine: triggerResult.rows[0].machine,
                userId: triggerResult.rows[0].id_user,
                createdAt: triggerResult.rows[0].createdAt
            },
            id         
        );
    }
    
    async save(trigger: Trigger): Promise<any> {
         const triggerSaved = await this
                                    .connection
                                    .insert("tbl_trigger", {
                                        description:    trigger.props.description, 
                                        value:          trigger.props.value, 
                                        status:         trigger.props.status, 
                                        group:          trigger.props.group, 
                                        machine:        trigger.props.machine, 
                                        id_user:        trigger.props.userId 
                                    });

       return triggerSaved;
    }

    async allTriggers(): Promise<Trigger | null> {
        return (await this.connection.query("SELECT * FROM tbl_trigger", [])).rows;
    }
}