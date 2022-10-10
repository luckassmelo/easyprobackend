import { ITriggerTypesRepository } from "../../application/repositories/ITriggersTypesRepository";
import { TriggerType } from "../../domain/entities/triggerType";
import Connection from "../database/Connection";
import PostgresSQLAdapter from "../database/PostgreSQLAdapter";


export class PrismaTriggersType implements ITriggerTypesRepository {
    
    constructor(
        readonly adapter: PostgresSQLAdapter
    ){}

    async findById(id: number): Promise<TriggerType | null> {
        const triggerTypeResult = await this.adapter.connection
        .select("*")
        .from("trigger.tbl_trigger_type")
        .where("id", id) 

        if(!triggerTypeResult)return null;
        
        return new TriggerType({
                    name: triggerTypeResult[0].name,
                    status: triggerTypeResult[0].status,
                    isProductiveTime: triggerTypeResult[0].is_productive_time,
                }, triggerTypeResult[0].id);
            
    }
}