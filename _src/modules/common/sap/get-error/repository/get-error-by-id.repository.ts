import { GetError } from "../models/get-error.model";
import { IGetErrorRepository } from "../interface/get-error-repository.interface";
import PostgresSQLAdapter from '../../../../../../src/infra/database/PostgreSQLAdapter'
import { ResponseError } from "../interface/response-error.interface";






export class GetErrorByIdRepository implements IGetErrorRepository {
    constructor(
        private readonly adapter: PostgresSQLAdapter
    ){}

    async findError(idRequisition: GetError): Promise<ResponseError> {
        const knex =  this.adapter.connection
        const response = await knex.select<ResponseError>(knex.raw(
            "info_log ->> 'name'"
        ))
        .whereRaw(`info_log -> 'errorProps' is not null AND info_log ->> 'idReq' = '${idRequisition.props.id}'`)
        .orderBy("date_log", "desc")
        .limit(1)
        .from("general.tbl_logs");
  
        
        
        return response[0];
    }


}

