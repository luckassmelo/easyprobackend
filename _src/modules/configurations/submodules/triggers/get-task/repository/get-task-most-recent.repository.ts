import { IGetTaskDate } from "../interface/get-task-most-recent.interface";
import PostgresSQLAdapter from '../../../../../../../src/infra/database/PostgreSQLAdapter'
import {  GetTriggerTask} from "../models/get-task-most-recent.model";


export class GetDateOfTaskRepository implements IGetTaskDate {

    constructor(private readonly adapter: PostgresSQLAdapter){}

    async findDateById(props:  GetTriggerTask): Promise< GetTriggerTask> {
        const response = await this.adapter.connection('trigger.tbl_trigger_task')
        .select<GetTriggerTask>('*')
        .where('id_trigger', '=', props.idTrigger).andWhere('id_oee', '=', props.idOee)
        .orderBy('created_at', 'desc')
        .limit(1);

        return response;
    }
}