import { IGetTaskDate } from "../interface/get-task-date.interface";
import PostgresSQLAdapter from '../../../../../../../src/infra/database/PostgreSQLAdapter'
import { ResponseDateType } from "../types/response-date.type";
import { GetDateOfTask } from "../models/get-date.model";


export class GetDateOfTaskRepository implements IGetTaskDate {

    constructor(private readonly adapter: PostgresSQLAdapter){}

    async findDateById(id: GetDateOfTask): Promise<ResponseDateType> {
        const response = await this.adapter.connection('trigger.tbl_trigger_task')
        .select<ResponseDateType>('created_at')
        .where('id_trigger', '=', id.getId())
        .orderBy('created_at', 'desc')
        .limit(1);


        return response[0];
    }
}