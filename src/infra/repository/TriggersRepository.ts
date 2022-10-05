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
                description: triggerResult[0].description,
                value: triggerResult[0].value,
                status: triggerResult[0].status,
                group: triggerResult[0].group,
                machine: triggerResult[0].machine,
                userId: triggerResult[0].id_user,
                createdAt: triggerResult[0].createdAt
            },
            id         
            
        );
    }
    
    async save(trigger: Trigger): Promise<any> {
         const triggerSaved = await this
                                    .adapter
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

    async allTriggers(): Promise<Trigger[] > {
        return await this.adapter.connection
        .select("*")
        .from("trigger.tbl_trigger");
    }
}