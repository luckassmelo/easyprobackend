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
        .from("tbl_trigger_type")
        .where("id", id) 

        if(!triggerTypeResult)return null;
        
        return new TriggerType({
                    description: triggerTypeResult[0].description,
                    status: triggerTypeResult[0].status,
                    unitOfMeasurement: triggerTypeResult[0].unitOfMeasurement,
                    isAccumulated: triggerTypeResult[0].isAccumulated,
                    triggerId: triggerTypeResult[0].id_trigger
                }, triggerTypeResult[0].id);
            
    }
}