import { GetTaskDateUseCase } from "../usecases/get-task-date.usecase";
import {Controller} from '../../../../../../presentation/protocols/controller';
import { HttpResponse } from "../../../../../../presentation/protocols/http";
import {  GetTriggerTask} from "../models/get-date.model";

type RequestProps = {
    id: number
}

export class GetTaskDateController implements Controller{
    constructor(private usecase: GetTaskDateUseCase){}

    async handle (request: RequestProps): Promise<HttpResponse>{
        const { id }  = request;
        
        const getTriggerTask = new GetTriggerTask()
        getTriggerTask.idTriggerSet = Number(id)
        const getDate =  await this.usecase.execute(getTriggerTask);
        
            
        return {
            statusCode: 200,
            response: getDate
        };
    };
}