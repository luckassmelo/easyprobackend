import { IClosedRepository } from "../../application/repositories/IClosedRepository";
import { Closed } from "../../domain/entities/closed";
import Connection from "../database/Connection";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";


export class PrismaClosedRepository implements IClosedRepository {
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async closedTask(closed: Closed): Promise<void | Closed> {    
        const closedResult = await this.adapter.connection("trigger.tbl_trigger_task")
        .select("*")
        .from("users.tbl_users")
        .where("windows_user", closed.props.windowsUser);
                                    //  .insert({
                                    //     windows_user: closed.props.windowsUser, 
                                    //     description: closed.props.description, 
                                    //     id: closed.props.idTask, 
                                    //  });
        
        if( closedResult.length > 0 ) {
            const putDescription = await this.adapter.connection("trigger.tbl_trigger_task")
            .where('id', "=", closed.props.id)
            .update({
                description: closed.props.description,
                closed_at: new Date(),
                closed: true
            })
            return putDescription 
        } else {
            console.log("usuario nao encontrado")
        }
    }

}