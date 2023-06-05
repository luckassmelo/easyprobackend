import { IGetTaskDate } from "../interface/get-task-date.interface";
import PostgresSQLAdapter from '../../../../../../../src/infra/database/PostgreSQLAdapter'
import {  GetTriggerTask} from "../models/get-date.model";


export class GetDateOfTaskRepository implements IGetTaskDate {

    constructor(private readonly adapter: PostgresSQLAdapter){}

    async findDateById(props:  GetTriggerTask): Promise< GetTriggerTask> {
        const response = await this.adapter.connection('trigger.tbl_trigger_task')
        .select<GetTriggerTask>('*')
        .where('id_trigger', '=', props.idTrigger)
        .orderBy('created_at', 'desc')
        .limit(1);
        return response;
    }
}