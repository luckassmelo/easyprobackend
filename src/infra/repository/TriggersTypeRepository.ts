import { ITriggerTypesRepository } from "../../application/repositories/ITriggersTypesRepository";
import { TriggerType } from "../../domain/entities/triggerType";
import Connection from "../database/Connection";


export class PrismaTriggersType implements ITriggerTypesRepository {
    
    constructor(
        readonly connection: Connection
    ){}

    async findById(id: number): Promise<TriggerType | null> {
        const triggerTypeResult = await this.connection.query("SELECT * FROM tbl_trigger_type WHERE id = ?", [id]);

        if(!triggerTypeResult)return null;
        
        return new TriggerType({
                    description: triggerTypeResult.rows[0].description,
                    status: triggerTypeResult.rows[0].status,
                    unitOfMeasurement: triggerTypeResult.rows[0].unitOfMeasurement,
                    isAccumulated: triggerTypeResult.rows[0].isAccumulated,
                    triggerId: triggerTypeResult.rows[0].id_trigger
                }, triggerTypeResult.rows[0].id);
            
    }
}