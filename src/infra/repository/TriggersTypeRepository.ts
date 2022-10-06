import { ITriggerTypesRepository } from "../../application/repositories/ITriggersTypesRepository";
import { TriggerType } from "../../domain/entities/triggerType";
import Connection from "../database/Connection";


export class PrismaTriggersType implements ITriggerTypesRepository {
    
    constructor(
        readonly connection: Connection
    ){}

    async findById(id: number): Promise<TriggerType | null> {
        const triggerTypeResult = await this.connection.query("SELECT * FROM trigger.tbl_trigger_type WHERE id = ?", [id]);

        if(!triggerTypeResult)return null;
        
        return new TriggerType({
                    name: triggerTypeResult.rows[0].name,
                    status: triggerTypeResult.rows[0].status,
                    isProductiveTime: triggerTypeResult.rows[0].is_productive_time,
                }, triggerTypeResult.rows[0].id);
            
    }
}